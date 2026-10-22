import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'sipureitanya.co.il',
  appName: 'סיפורי תניא',
  webDir: '.',
  server: {
    androidScheme: 'https',
    iosScheme: 'https'
  },
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#0f172a'
  },
  android: {
    backgroundColor: '#0f172a'
  }
};

export default config;
