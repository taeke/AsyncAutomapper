/// <reference path='./../../typings/tsd.d.ts' />
/// <reference path='./../interfaces/ILinkDto.d.ts' />
/// <reference path='./../interfaces/IBaseService.d.ts' />
/// <reference path='./../interfaces/IHateoasService.d.ts' />
'use strict';

var app = angular.module('app');

class HateoasService<T> implements IHateoasService<T> {
	static $inject: any[] = ['$q', 'baseService'];
	links: ILinkDto[];
	
	constructor(private $q: ng.IQService, private baseService: IBaseService) {
	}
	
	then(successCallback: (promiseValue: T) => void): void {
		var promises: ng.IPromise<any>[] = [];
		_.each(this.links, (link: ILinkDto) => {
			var resource = this.baseService.getResource(this, link.rel);
			promises.push(resource.get().$promise);
		});
		
		this.$q.all(promises).then((results: any[]) => {
			for (var i = 0; i < this.links.length; i++) {
				this[this.links[i].rel] = results[i];
			}
			
			successCallback(<any>this);
		});
	}
}

app.service('hateoasService', HateoasService);