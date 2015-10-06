#Async mapping with AutoMapper
This shows you how to use the https://github.com/ArcadyIT/AutoMapper in an angularJs enviroment when you need async mapping.
You have this for example:

```

interface ILinkDto {
	rel: string;
	href: string;
}

interface IPersonDto {
	name: string;
	links: ILinkDto[];
}

interface IPerson extends IPersonDto {
	address: IAddress;
}

var objA: IPersonDto = { 
	name: 'Gerry Rafferty',
	links: [ { rel: 'address', href: '/api/address/1'}] 
}

```

If you would like to map objA on to IPersonDto you will find there is a little challenge because you need to wait for the async result 
from the restfull endpoint /api/address/1 to map the address. 

The trick is to use convertToType and provide a then function in this class for the mapping.

```

		MapBase.prototype = this.hateoasService;
		automapper.createMap('IPersonDto', 'IHateoasService<IPerson>')
			.convertToType(MapBase);

		var personHateoasService: IHateoasService<IPerson> = automapper.map('IPersonDto', 'IHateoasService<IPerson>', personDto);
	    personHateoasService.then((person: IPerson) => {
			this.currentPerson = person;
		});

```

#Install and try this thing

```

npm install
bower install
tsd install
tsd link
gulp
gulp

```

Yes the first time gulp seems to fail. Open index.html in the browser to see this thing work.
