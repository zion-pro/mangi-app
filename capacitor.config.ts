import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.zionpro.mangi',
  appName: 'Mangi - Duka la Biashara',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  android: {
    buildOptions: {
      keystorePath: './keystore/mangi.keystore',
      keystorePassword: 'mangi2024',
      keystoreAlias: 'mangi',
      keystoreAliasPassword: 'mangi2024',
      releaseType: 'APK'
    }
  }
};

export default config;
