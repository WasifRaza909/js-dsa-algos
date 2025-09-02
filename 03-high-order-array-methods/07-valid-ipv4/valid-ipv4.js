const isValidIPv4 = (ipStr) => {
    const ipsStrToArr = ipStr.split('.')
    if(ipsStrToArr.length !== 4){
        return false;
    }

    const checkRange = ipsStrToArr.every(ip => !ip.startsWith("0" ) && ip >= 0 && ip <= 255)

    
    return checkRange
};

module.exports = isValidIPv4;
