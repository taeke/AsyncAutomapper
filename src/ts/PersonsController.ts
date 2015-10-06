/// <reference path='./../../typings/tsd.d.ts' />
/// <reference path='./../interfaces/IBaseDto.d.ts' />
/// <reference path='./../interfaces/IPersonDto.d.ts' />
/// <reference path='./../interfaces/IPerson.d.ts' />
/// <reference path='./../interfaces/IBaseService.d.ts' />
/// <reference path='./../interfaces/IListResultDto.d.ts' />
/// <reference path='./../interfaces/IHateoasService.d.ts' />
/// <reference path='./MapBase' />
'use strict';

var app = angular.module('app');

class PersonsController {
	static $inject = ['baseService', 'API', 'hateoasService'];
	
	persons: IPersonDto[];
	currentPerson: IPerson;
	
	constructor(private baseService: IBaseService, private api: IBaseDto, private hateoasService: IHateoasService<IPerson>) {
		var personsResource = this.baseService.getResource<IListResultDto<IPersonDto>>(api, 'persons');
		personsResource.get().$promise.then((result: IListResultDto<IPersonDto>) => {
			this.persons = result.items;
		});
	}
	
	detailsClick(personDto: IPersonDto): void {
		MapBase.prototype = this.hateoasService;
		automapper.createMap('IPersonDto', 'IHateoasService<IPerson>')
			.convertToType(MapBase);

		var personHateoasService: IHateoasService<IPerson> = automapper.map('IPersonDto', 'IHateoasService<IPerson>', personDto);
	    personHateoasService.then((person: IPerson) => {
			this.currentPerson = person;
		});
	}	
}

app.controller('personsController', PersonsController);