function analyzeSolarSystem(solarSystemData) {

    let solarSystem = JSON.parse(solarSystemData);

    solarSystem.planets.forEach(planet => {
        const name = planet?.name;
        const type = planet?.type;
        const numberOfMoons = planet?.numberOfMoons;
        const discoveredIn = planet?.discoveredIn;
        const maxTemp = planet?.surfaceTemperature?.max;
        const minTemp = planet?.surfaceTemperature?.min;
        const hasRings = planet?.hasRings;

        // Define: classification
        if (maxTemp < 50) { planet.classification = 'Potentially Habitable' };
        if (maxTemp >= 50) { planet.classification = 'Extreme Environment' };
        if (type == 'gas' && numberOfMoons > 10) { planet.classification = 'Complex System' };
        if (type == 'gas' && numberOfMoons <= 10) { planet.classification = 'Simple Gas Giant' };

        // Define: specialFeature
        if (hasRings == true && numberOfMoons > 5) { planet.specialFeature = 'Ring System with Rich Moon Population' }

        // Define: ageOfDiscovery
        planet.ageOfDiscovery = (2010 - discoveredIn)

    });

    return JSON.stringify(solarSystem);
}

let solarSystemData,retorno

solarSystemData = `{"planets":[{"name":"Mercury","type":"rocky","numberOfMoons":0,"discoveredIn":-3000,"surfaceTemperature":{"min":-180,"max":430},"hasRings":false}]}`
retorno = analyzeSolarSystem(solarSystemData)
console.log(retorno)
console.log('----------------------------------')

solarSystemData = `{"planets":[{"name":"Neptune","type":"gas","numberOfMoons":14,"discoveredIn":1846,"surfaceTemperature":{"min":-214,"max":-200},"hasRings":true},{"name":"Venus","type":"rocky","numberOfMoons":0,"discoveredIn":-3000,"surfaceTemperature":{"min":462,"max":462},"hasRings":false}]}`
retorno = analyzeSolarSystem(solarSystemData)
console.log(retorno)
console.log('----------------------------------')

solarSystemData = `{"planets":[{"name":"Kepler-186f","type":"rocky","numberOfMoons":2,"discoveredIn":2014,"surfaceTemperature":{"min":-20,"max":40},"hasRings":false}]}`
retorno = analyzeSolarSystem(solarSystemData)
console.log(retorno)
console.log('----------------------------------')

solarSystemData = `{"planets":[{"name":"Jupiter","type":"gas","numberOfMoons":79,"discoveredIn":-3000,"surfaceTemperature":{"min":-110,"max":-40},"hasRings":true},{"name":"Uranus","type":"gas","numberOfMoons":27,"discoveredIn":1781,"surfaceTemperature":{"min":-224,"max":-216},"hasRings":true}]}`
retorno = analyzeSolarSystem(solarSystemData)
console.log(retorno)
console.log('----------------------------------')

solarSystemData = `{"planets":[{"name":"Mars","type":"rocky","numberOfMoons":2,"discoveredIn":-3000,"surfaceTemperature":{"min":-140,"max":20},"hasRings":false},{"name":"Saturn","type":"gas","numberOfMoons":82,"discoveredIn":-3000,"surfaceTemperature":{"min":-178,"max":-138},"hasRings":true},{"name":"Earth","type":"rocky","numberOfMoons":1,"discoveredIn":-3000,"surfaceTemperature":{"min":-88,"max":58},"hasRings":false}]}`
retorno = analyzeSolarSystem(solarSystemData)
console.log(retorno)
console.log('----------------------------------')

solarSystemData = `{"planets":[{"name":"HD 209458 b","type":"gas","numberOfMoons":3,"discoveredIn":1999,"surfaceTemperature":{"min":800,"max":1200},"hasRings":false}]}`
retorno = analyzeSolarSystem(solarSystemData)
console.log(retorno)
console.log('----------------------------------')