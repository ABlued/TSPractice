interface PhoneNumberDictionary {
    [phone: string]: {
      num: number;
    };
}
  
interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}
// 이렇게 타입이 아닌 자세한 문자열을 받고 싶다면 enum을 사용해야 한다.
enum PhoneType{
    Home = 'home',
    Office = 'office',
    Studio = 'studio',
}

export {Contact, PhoneNumberDictionary, PhoneType};