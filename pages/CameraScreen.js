import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import QRCodeScanner from 'expo-qrcode-scanner';
import {BarCodeScanner} from 'expo-barcode-scanner';
const CameraScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={{ flex: 1 }}>
            <QRCodeScanner
                onScanSuccess={(scanData) => console.log(scanData)}
                onScanFail={() => console.log('Failed to scan')}/>
        </View>
    );
}

export default CameraScreen