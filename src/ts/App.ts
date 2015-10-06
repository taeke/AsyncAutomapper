/// <reference path='./../../typings/tsd.d.ts' />
'use strict';

var app = angular.module('app', ['ngResource', 'ngMockE2E']);

app.constant('API', { links: [{ rel:'persons', href:'/api/persons' }]});

app.run(($httpBackend: any) => {
    $httpBackend.whenGET('/api/persons').respond( { items: [ { 
            name: 'Gerry Rafferty',
            links: [ { rel: 'address', href: '/api/address/1'}] 
        }, { 
            name: 'Sting',
            links: [ { rel: 'address', href: '/api/address/2'}]
        }, { 
            name: 'Eric Clapton',
            links: [ { rel: 'address', href: '/api/address/3'}]
        }
    ]});
    
    $httpBackend.whenGET('/api/address/1').respond( { street: 'Baker Street' } ); 
    $httpBackend.whenGET('/api/address/2').respond( { street: 'Moon Over Bourbon Street' } ); 
    $httpBackend.whenGET('/api/address/3').respond( { street: 'Key to the highway' } ); 
});