interface IBaseService {
	getResource: <T>(baseDto: IBaseDto, rel: string) => angular.resource.IResourceClass<angular.resource.IResource<T>>;
}