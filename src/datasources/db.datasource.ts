import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mssql',
  url: '',
  host: process.env.AZ_SQL_HOST,
  port: 1433,
  user: process.env.AZ_SQL_USER,
  password: process.env.AZ_SQL_PASSWORD,
  database: process.env.AZ_SQL_DATABASE
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    console.log(`Connecting to ${process.env.AZ_SQL_DATABASE}...`);
    super(dsConfig);
  }
}

// import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
// import {juggler} from '@loopback/repository';

// const config = {
//   name: 'db',
//   connector: 'memory',
//   localStorage: '',
//   file: './data/db.json',
// };

// // Observe application's life cycle to disconnect the datasource when
// // application is stopped. This allows the application to be shut down
// // gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// // Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
// @lifeCycleObserver('datasource')
// export class DbDataSource
//   extends juggler.DataSource
//   implements LifeCycleObserver {
//   static dataSourceName = 'db';
//   static readonly defaultConfig = config;

//   constructor(
//     @inject('datasources.config.db', {optional: true})
//     dsConfig: object = config,
//   ) {
//     super(dsConfig);
//   }
// }
