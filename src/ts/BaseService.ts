/// <reference path='./../../typings/tsd.d.ts' />
/// <reference path='./../interfaces/IBaseService.d.ts' />
/// <reference path='./../interfaces/IBaseDto.d.ts' />
/// <reference path='./../interfaces/ILinkDto.d.ts' />
'use strict';

var app = angular.module('app');

class BaseService implements IBaseService {
	static $inject: any[] = ['$resource'];
	
	constructor(private $resource: angular.resource.IResourceService) {
	}
	
	getResource<T>(baseDto: IBaseDto, rel: string): angular.resource.IResourceClass<angular.resource.IResource<T>> {
		var link: ILinkDto = _.find(baseDto.links, (link: ILinkDto) => { return link.rel === rel; });
		
		if (link) {
			return this.$resource(link.href);
		} else {
			throw(new Error('rel not found.'));
		}
	}	
}

app.service('baseService', BaseService);