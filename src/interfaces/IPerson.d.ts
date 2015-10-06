/// <reference path='./IAddress.d.ts' />
/// <reference path='./IPersonDto.d.ts' />

interface IPerson extends IPersonDto {
	address: IAddress;
}