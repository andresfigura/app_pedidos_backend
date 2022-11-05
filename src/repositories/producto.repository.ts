import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsPedidosDataSource} from '../datasources';
import {Producto, ProductoRelations} from '../models';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.id,
  ProductoRelations
> {
  constructor(
    @inject('datasources.dsPedidos') dataSource: DsPedidosDataSource,
  ) {
    super(Producto, dataSource);
  }
}
