import CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment';

export class LocalStorageService {
  private encryptionKey = environment.encryptionKey;

  saveData<T>(key: string, data: T) {
    localStorage.setItem(key, this.encrypt(JSON.stringify(data)));
  }

  getData<T>(key: string): T | null {
    try {
      return JSON.parse(this.decrypt(localStorage.getItem(key) || '')) as T;
    } catch (error) {
      return null;
    }
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }

  private encrypt(data: string) {
    return CryptoJS.AES.encrypt(data, this.encryptionKey).toString();
  }

  private decrypt(stringifiedData: string) {
    return CryptoJS.AES.decrypt(stringifiedData, this.encryptionKey).toString(
      CryptoJS.enc.Utf8
    );
  }
}
