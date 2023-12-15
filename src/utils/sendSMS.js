/* eslint-disable prettier/prettier */
import SendSMS from 'react-native-sms';

export const sendSMS = async (emergencyContacts) => {
    const numbersArray = emergencyContacts.map(({ phoneNumbers }) => {
        return phoneNumbers;
    });
    const result = await SendSMS.send({
        body: "I'd like to add you as an emergency contact in my Smart Ride App, Thanks!",
        recipients: numbersArray,
        successTypes: ['sent', 'queued'],
        allowAndroidSendWithoutReadPermission: true,
    });
    console.log(result);
    return true;
};
