import { View, Text } from 'react-native'
import React from 'react'
import QRCodeScanner from 'expo-qrcode-scanner';

const QRScanner = () => {
  const handleScanSuccess = (scanData) => {
      // Handle successful scan
      console.log('QR Code Scanned:', scanData);
  };

  const handleScanFail = () => {
      // Handle scan failure
      console.log('Failed to scan QR Code.');
  };

  return (
      <View style={{ flex: 1 }}>
          <QRCodeScanner
              onScanSuccess={handleScanSuccess}
              onScanFail={handleScanFail}
              // Additional props
          />
      </View>
  );
};


export default QRScanner