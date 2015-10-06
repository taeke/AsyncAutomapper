interface IHateoasService<T> {
	then: (successCallback: (promiseValue: T) => void) => void;
}