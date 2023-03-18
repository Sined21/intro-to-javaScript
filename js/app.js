'use strict';
const userAge = prompt('Enter your year of birth');

if (!userAge || isNaN(+userAge)) {
    alert('It is a pity that you did not want to enter your year of birth');
} else {
    const userCity = prompt('Enter your city');
    
    if (!userCity) {
        alert('It is a pity that you did not want to enter your city');
    } else {
        const userSport = prompt('Enter your favorite sport');

        if (!userSport) {
            alert('It is a pity that you did not want to enter your sport');
        } else {
            const currentDate = new Date().getFullYear();
            let userAgeOutput = `Your age: ${currentDate - userAge}`;
            let userCityOutput;
            let userSportOutput;
            
            switch (userCity) {
                case 'Kyiv':
                case 'Warsaw':
                case 'Rome':
                    userCityOutput = `You live in the capital - ${userCity}`;
                    break;
                    
                default: 
                    userCityOutput = `You live in a town - ${userCity}`;
            }

            switch (userSport) {
                case 'football':
                    userSportOutput = 'Cool! Do you want to be Lionel Messi?';
                    break;
                    
                case 'basketball':
                    userSportOutput = 'Cool! Do you want to be Michael Jordan?';
                    break;
                    
                case 'running':
                    userSportOutput = 'Cool! Do you want to be Usain Bolt?';
                    break;
                    
                default:
                    userSportOutput = `Do you like - ${userSport}`;
            }
            
            alert(`${userAgeOutput} \n ${userCityOutput} \n ${userSportOutput}`);
        }
    }
}