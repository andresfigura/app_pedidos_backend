import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsPedidosDataSource} from '../datasources';
import {Pedido, PedidoRelations} from '../models';

export class PedidoRepository extends DefaultCrudRepository<
  Pedido,
  typeof Pedido.prototype.id,
  PedidoRelations
> {
  constructor(
    @inject('datasources.dsPedidos') dataSource: DsPedidosDataSource,
  ) {
    super(Pedido, dataSource);
  }
}
