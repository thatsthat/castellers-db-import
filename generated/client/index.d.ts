
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Actuacio
 * 
 */
export type Actuacio = $Result.DefaultSelection<Prisma.$ActuacioPayload>
/**
 * Model Cronica
 * 
 */
export type Cronica = $Result.DefaultSelection<Prisma.$CronicaPayload>
/**
 * Model Castell
 * 
 */
export type Castell = $Result.DefaultSelection<Prisma.$CastellPayload>
/**
 * Model Usuari
 * 
 */
export type Usuari = $Result.DefaultSelection<Prisma.$UsuariPayload>
/**
 * Model Foto
 * 
 */
export type Foto = $Result.DefaultSelection<Prisma.$FotoPayload>
/**
 * Model Temporada
 * 
 */
export type Temporada = $Result.DefaultSelection<Prisma.$TemporadaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Actuacios
 * const actuacios = await prisma.actuacio.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Actuacios
   * const actuacios = await prisma.actuacio.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.actuacio`: Exposes CRUD operations for the **Actuacio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actuacios
    * const actuacios = await prisma.actuacio.findMany()
    * ```
    */
  get actuacio(): Prisma.ActuacioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cronica`: Exposes CRUD operations for the **Cronica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cronicas
    * const cronicas = await prisma.cronica.findMany()
    * ```
    */
  get cronica(): Prisma.CronicaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.castell`: Exposes CRUD operations for the **Castell** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Castells
    * const castells = await prisma.castell.findMany()
    * ```
    */
  get castell(): Prisma.CastellDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuari`: Exposes CRUD operations for the **Usuari** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuaris
    * const usuaris = await prisma.usuari.findMany()
    * ```
    */
  get usuari(): Prisma.UsuariDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foto`: Exposes CRUD operations for the **Foto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fotos
    * const fotos = await prisma.foto.findMany()
    * ```
    */
  get foto(): Prisma.FotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.temporada`: Exposes CRUD operations for the **Temporada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Temporadas
    * const temporadas = await prisma.temporada.findMany()
    * ```
    */
  get temporada(): Prisma.TemporadaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Actuacio: 'Actuacio',
    Cronica: 'Cronica',
    Castell: 'Castell',
    Usuari: 'Usuari',
    Foto: 'Foto',
    Temporada: 'Temporada'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "actuacio" | "cronica" | "castell" | "usuari" | "foto" | "temporada"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Actuacio: {
        payload: Prisma.$ActuacioPayload<ExtArgs>
        fields: Prisma.ActuacioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActuacioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActuacioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>
          }
          findFirst: {
            args: Prisma.ActuacioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActuacioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>
          }
          findMany: {
            args: Prisma.ActuacioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>[]
          }
          create: {
            args: Prisma.ActuacioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>
          }
          createMany: {
            args: Prisma.ActuacioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActuacioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>[]
          }
          delete: {
            args: Prisma.ActuacioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>
          }
          update: {
            args: Prisma.ActuacioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>
          }
          deleteMany: {
            args: Prisma.ActuacioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActuacioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActuacioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>[]
          }
          upsert: {
            args: Prisma.ActuacioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuacioPayload>
          }
          aggregate: {
            args: Prisma.ActuacioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActuacio>
          }
          groupBy: {
            args: Prisma.ActuacioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActuacioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActuacioCountArgs<ExtArgs>
            result: $Utils.Optional<ActuacioCountAggregateOutputType> | number
          }
        }
      }
      Cronica: {
        payload: Prisma.$CronicaPayload<ExtArgs>
        fields: Prisma.CronicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CronicaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CronicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CronicaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CronicaPayload>
          }
          findFirst: {
            args: Prisma.CronicaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CronicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CronicaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CronicaPayload>
          }
          findMany: {
            args: Prisma.CronicaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CronicaPayload>[]
          }
          create: {
            args: Prisma.CronicaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CronicaPayload>
          }
          createMany: {
            args: Prisma.CronicaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CronicaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CronicaPayload>[]
          }
          delete: {
            args: Prisma.CronicaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CronicaPayload>
          }
          update: {
            args: Prisma.CronicaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CronicaPayload>
          }
          deleteMany: {
            args: Prisma.CronicaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CronicaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CronicaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CronicaPayload>[]
          }
          upsert: {
            args: Prisma.CronicaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CronicaPayload>
          }
          aggregate: {
            args: Prisma.CronicaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCronica>
          }
          groupBy: {
            args: Prisma.CronicaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CronicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CronicaCountArgs<ExtArgs>
            result: $Utils.Optional<CronicaCountAggregateOutputType> | number
          }
        }
      }
      Castell: {
        payload: Prisma.$CastellPayload<ExtArgs>
        fields: Prisma.CastellFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CastellFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CastellFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>
          }
          findFirst: {
            args: Prisma.CastellFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CastellFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>
          }
          findMany: {
            args: Prisma.CastellFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>[]
          }
          create: {
            args: Prisma.CastellCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>
          }
          createMany: {
            args: Prisma.CastellCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CastellCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>[]
          }
          delete: {
            args: Prisma.CastellDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>
          }
          update: {
            args: Prisma.CastellUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>
          }
          deleteMany: {
            args: Prisma.CastellDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CastellUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CastellUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>[]
          }
          upsert: {
            args: Prisma.CastellUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastellPayload>
          }
          aggregate: {
            args: Prisma.CastellAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCastell>
          }
          groupBy: {
            args: Prisma.CastellGroupByArgs<ExtArgs>
            result: $Utils.Optional<CastellGroupByOutputType>[]
          }
          count: {
            args: Prisma.CastellCountArgs<ExtArgs>
            result: $Utils.Optional<CastellCountAggregateOutputType> | number
          }
        }
      }
      Usuari: {
        payload: Prisma.$UsuariPayload<ExtArgs>
        fields: Prisma.UsuariFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>
          }
          findFirst: {
            args: Prisma.UsuariFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>
          }
          findMany: {
            args: Prisma.UsuariFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>[]
          }
          create: {
            args: Prisma.UsuariCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>
          }
          createMany: {
            args: Prisma.UsuariCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuariCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>[]
          }
          delete: {
            args: Prisma.UsuariDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>
          }
          update: {
            args: Prisma.UsuariUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>
          }
          deleteMany: {
            args: Prisma.UsuariDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuariUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>[]
          }
          upsert: {
            args: Prisma.UsuariUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariPayload>
          }
          aggregate: {
            args: Prisma.UsuariAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuari>
          }
          groupBy: {
            args: Prisma.UsuariGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariCountAggregateOutputType> | number
          }
        }
      }
      Foto: {
        payload: Prisma.$FotoPayload<ExtArgs>
        fields: Prisma.FotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          findFirst: {
            args: Prisma.FotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          findMany: {
            args: Prisma.FotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>[]
          }
          create: {
            args: Prisma.FotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          createMany: {
            args: Prisma.FotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>[]
          }
          delete: {
            args: Prisma.FotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          update: {
            args: Prisma.FotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          deleteMany: {
            args: Prisma.FotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>[]
          }
          upsert: {
            args: Prisma.FotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          aggregate: {
            args: Prisma.FotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoto>
          }
          groupBy: {
            args: Prisma.FotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FotoCountArgs<ExtArgs>
            result: $Utils.Optional<FotoCountAggregateOutputType> | number
          }
        }
      }
      Temporada: {
        payload: Prisma.$TemporadaPayload<ExtArgs>
        fields: Prisma.TemporadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemporadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemporadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporadaPayload>
          }
          findFirst: {
            args: Prisma.TemporadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemporadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporadaPayload>
          }
          findMany: {
            args: Prisma.TemporadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporadaPayload>[]
          }
          create: {
            args: Prisma.TemporadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporadaPayload>
          }
          createMany: {
            args: Prisma.TemporadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemporadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporadaPayload>[]
          }
          delete: {
            args: Prisma.TemporadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporadaPayload>
          }
          update: {
            args: Prisma.TemporadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporadaPayload>
          }
          deleteMany: {
            args: Prisma.TemporadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemporadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemporadaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporadaPayload>[]
          }
          upsert: {
            args: Prisma.TemporadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporadaPayload>
          }
          aggregate: {
            args: Prisma.TemporadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemporada>
          }
          groupBy: {
            args: Prisma.TemporadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemporadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemporadaCountArgs<ExtArgs>
            result: $Utils.Optional<TemporadaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    actuacio?: ActuacioOmit
    cronica?: CronicaOmit
    castell?: CastellOmit
    usuari?: UsuariOmit
    foto?: FotoOmit
    temporada?: TemporadaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ActuacioCountOutputType
   */

  export type ActuacioCountOutputType = {
    castells: number
    fotos: number
  }

  export type ActuacioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    castells?: boolean | ActuacioCountOutputTypeCountCastellsArgs
    fotos?: boolean | ActuacioCountOutputTypeCountFotosArgs
  }

  // Custom InputTypes
  /**
   * ActuacioCountOutputType without action
   */
  export type ActuacioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActuacioCountOutputType
     */
    select?: ActuacioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActuacioCountOutputType without action
   */
  export type ActuacioCountOutputTypeCountCastellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CastellWhereInput
  }

  /**
   * ActuacioCountOutputType without action
   */
  export type ActuacioCountOutputTypeCountFotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoWhereInput
  }


  /**
   * Count Type CastellCountOutputType
   */

  export type CastellCountOutputType = {
    fotos: number
  }

  export type CastellCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotos?: boolean | CastellCountOutputTypeCountFotosArgs
  }

  // Custom InputTypes
  /**
   * CastellCountOutputType without action
   */
  export type CastellCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastellCountOutputType
     */
    select?: CastellCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CastellCountOutputType without action
   */
  export type CastellCountOutputTypeCountFotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoWhereInput
  }


  /**
   * Count Type UsuariCountOutputType
   */

  export type UsuariCountOutputType = {
    fotos: number
    croniques: number
  }

  export type UsuariCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotos?: boolean | UsuariCountOutputTypeCountFotosArgs
    croniques?: boolean | UsuariCountOutputTypeCountCroniquesArgs
  }

  // Custom InputTypes
  /**
   * UsuariCountOutputType without action
   */
  export type UsuariCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariCountOutputType
     */
    select?: UsuariCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariCountOutputType without action
   */
  export type UsuariCountOutputTypeCountFotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoWhereInput
  }

  /**
   * UsuariCountOutputType without action
   */
  export type UsuariCountOutputTypeCountCroniquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CronicaWhereInput
  }


  /**
   * Count Type TemporadaCountOutputType
   */

  export type TemporadaCountOutputType = {
    actuacions: number
  }

  export type TemporadaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actuacions?: boolean | TemporadaCountOutputTypeCountActuacionsArgs
  }

  // Custom InputTypes
  /**
   * TemporadaCountOutputType without action
   */
  export type TemporadaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporadaCountOutputType
     */
    select?: TemporadaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemporadaCountOutputType without action
   */
  export type TemporadaCountOutputTypeCountActuacionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActuacioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Actuacio
   */

  export type AggregateActuacio = {
    _count: ActuacioCountAggregateOutputType | null
    _avg: ActuacioAvgAggregateOutputType | null
    _sum: ActuacioSumAggregateOutputType | null
    _min: ActuacioMinAggregateOutputType | null
    _max: ActuacioMaxAggregateOutputType | null
  }

  export type ActuacioAvgAggregateOutputType = {
    id: number | null
    temporadaId: number | null
    cronicaId: number | null
  }

  export type ActuacioSumAggregateOutputType = {
    id: number | null
    temporadaId: number | null
    cronicaId: number | null
  }

  export type ActuacioMinAggregateOutputType = {
    id: number | null
    data: Date | null
    dataHora: Date | null
    lloc: string | null
    ciutat: string | null
    nom: string | null
    temporadaId: number | null
    cronicaId: number | null
  }

  export type ActuacioMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    dataHora: Date | null
    lloc: string | null
    ciutat: string | null
    nom: string | null
    temporadaId: number | null
    cronicaId: number | null
  }

  export type ActuacioCountAggregateOutputType = {
    id: number
    data: number
    dataHora: number
    lloc: number
    ciutat: number
    nom: number
    temporadaId: number
    cronicaId: number
    _all: number
  }


  export type ActuacioAvgAggregateInputType = {
    id?: true
    temporadaId?: true
    cronicaId?: true
  }

  export type ActuacioSumAggregateInputType = {
    id?: true
    temporadaId?: true
    cronicaId?: true
  }

  export type ActuacioMinAggregateInputType = {
    id?: true
    data?: true
    dataHora?: true
    lloc?: true
    ciutat?: true
    nom?: true
    temporadaId?: true
    cronicaId?: true
  }

  export type ActuacioMaxAggregateInputType = {
    id?: true
    data?: true
    dataHora?: true
    lloc?: true
    ciutat?: true
    nom?: true
    temporadaId?: true
    cronicaId?: true
  }

  export type ActuacioCountAggregateInputType = {
    id?: true
    data?: true
    dataHora?: true
    lloc?: true
    ciutat?: true
    nom?: true
    temporadaId?: true
    cronicaId?: true
    _all?: true
  }

  export type ActuacioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actuacio to aggregate.
     */
    where?: ActuacioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actuacios to fetch.
     */
    orderBy?: ActuacioOrderByWithRelationInput | ActuacioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActuacioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actuacios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actuacios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actuacios
    **/
    _count?: true | ActuacioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActuacioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActuacioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActuacioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActuacioMaxAggregateInputType
  }

  export type GetActuacioAggregateType<T extends ActuacioAggregateArgs> = {
        [P in keyof T & keyof AggregateActuacio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActuacio[P]>
      : GetScalarType<T[P], AggregateActuacio[P]>
  }




  export type ActuacioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActuacioWhereInput
    orderBy?: ActuacioOrderByWithAggregationInput | ActuacioOrderByWithAggregationInput[]
    by: ActuacioScalarFieldEnum[] | ActuacioScalarFieldEnum
    having?: ActuacioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActuacioCountAggregateInputType | true
    _avg?: ActuacioAvgAggregateInputType
    _sum?: ActuacioSumAggregateInputType
    _min?: ActuacioMinAggregateInputType
    _max?: ActuacioMaxAggregateInputType
  }

  export type ActuacioGroupByOutputType = {
    id: number
    data: Date
    dataHora: Date | null
    lloc: string | null
    ciutat: string
    nom: string
    temporadaId: number
    cronicaId: number | null
    _count: ActuacioCountAggregateOutputType | null
    _avg: ActuacioAvgAggregateOutputType | null
    _sum: ActuacioSumAggregateOutputType | null
    _min: ActuacioMinAggregateOutputType | null
    _max: ActuacioMaxAggregateOutputType | null
  }

  type GetActuacioGroupByPayload<T extends ActuacioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActuacioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActuacioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActuacioGroupByOutputType[P]>
            : GetScalarType<T[P], ActuacioGroupByOutputType[P]>
        }
      >
    >


  export type ActuacioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    dataHora?: boolean
    lloc?: boolean
    ciutat?: boolean
    nom?: boolean
    temporadaId?: boolean
    cronicaId?: boolean
    castells?: boolean | Actuacio$castellsArgs<ExtArgs>
    fotos?: boolean | Actuacio$fotosArgs<ExtArgs>
    temporada?: boolean | TemporadaDefaultArgs<ExtArgs>
    cronica?: boolean | Actuacio$cronicaArgs<ExtArgs>
    _count?: boolean | ActuacioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actuacio"]>

  export type ActuacioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    dataHora?: boolean
    lloc?: boolean
    ciutat?: boolean
    nom?: boolean
    temporadaId?: boolean
    cronicaId?: boolean
    temporada?: boolean | TemporadaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actuacio"]>

  export type ActuacioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    dataHora?: boolean
    lloc?: boolean
    ciutat?: boolean
    nom?: boolean
    temporadaId?: boolean
    cronicaId?: boolean
    temporada?: boolean | TemporadaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actuacio"]>

  export type ActuacioSelectScalar = {
    id?: boolean
    data?: boolean
    dataHora?: boolean
    lloc?: boolean
    ciutat?: boolean
    nom?: boolean
    temporadaId?: boolean
    cronicaId?: boolean
  }

  export type ActuacioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "dataHora" | "lloc" | "ciutat" | "nom" | "temporadaId" | "cronicaId", ExtArgs["result"]["actuacio"]>
  export type ActuacioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    castells?: boolean | Actuacio$castellsArgs<ExtArgs>
    fotos?: boolean | Actuacio$fotosArgs<ExtArgs>
    temporada?: boolean | TemporadaDefaultArgs<ExtArgs>
    cronica?: boolean | Actuacio$cronicaArgs<ExtArgs>
    _count?: boolean | ActuacioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActuacioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    temporada?: boolean | TemporadaDefaultArgs<ExtArgs>
  }
  export type ActuacioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    temporada?: boolean | TemporadaDefaultArgs<ExtArgs>
  }

  export type $ActuacioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actuacio"
    objects: {
      castells: Prisma.$CastellPayload<ExtArgs>[]
      fotos: Prisma.$FotoPayload<ExtArgs>[]
      temporada: Prisma.$TemporadaPayload<ExtArgs>
      cronica: Prisma.$CronicaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      dataHora: Date | null
      lloc: string | null
      ciutat: string
      nom: string
      temporadaId: number
      cronicaId: number | null
    }, ExtArgs["result"]["actuacio"]>
    composites: {}
  }

  type ActuacioGetPayload<S extends boolean | null | undefined | ActuacioDefaultArgs> = $Result.GetResult<Prisma.$ActuacioPayload, S>

  type ActuacioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActuacioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActuacioCountAggregateInputType | true
    }

  export interface ActuacioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actuacio'], meta: { name: 'Actuacio' } }
    /**
     * Find zero or one Actuacio that matches the filter.
     * @param {ActuacioFindUniqueArgs} args - Arguments to find a Actuacio
     * @example
     * // Get one Actuacio
     * const actuacio = await prisma.actuacio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActuacioFindUniqueArgs>(args: SelectSubset<T, ActuacioFindUniqueArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actuacio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActuacioFindUniqueOrThrowArgs} args - Arguments to find a Actuacio
     * @example
     * // Get one Actuacio
     * const actuacio = await prisma.actuacio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActuacioFindUniqueOrThrowArgs>(args: SelectSubset<T, ActuacioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actuacio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuacioFindFirstArgs} args - Arguments to find a Actuacio
     * @example
     * // Get one Actuacio
     * const actuacio = await prisma.actuacio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActuacioFindFirstArgs>(args?: SelectSubset<T, ActuacioFindFirstArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actuacio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuacioFindFirstOrThrowArgs} args - Arguments to find a Actuacio
     * @example
     * // Get one Actuacio
     * const actuacio = await prisma.actuacio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActuacioFindFirstOrThrowArgs>(args?: SelectSubset<T, ActuacioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actuacios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuacioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actuacios
     * const actuacios = await prisma.actuacio.findMany()
     * 
     * // Get first 10 Actuacios
     * const actuacios = await prisma.actuacio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actuacioWithIdOnly = await prisma.actuacio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActuacioFindManyArgs>(args?: SelectSubset<T, ActuacioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actuacio.
     * @param {ActuacioCreateArgs} args - Arguments to create a Actuacio.
     * @example
     * // Create one Actuacio
     * const Actuacio = await prisma.actuacio.create({
     *   data: {
     *     // ... data to create a Actuacio
     *   }
     * })
     * 
     */
    create<T extends ActuacioCreateArgs>(args: SelectSubset<T, ActuacioCreateArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actuacios.
     * @param {ActuacioCreateManyArgs} args - Arguments to create many Actuacios.
     * @example
     * // Create many Actuacios
     * const actuacio = await prisma.actuacio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActuacioCreateManyArgs>(args?: SelectSubset<T, ActuacioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actuacios and returns the data saved in the database.
     * @param {ActuacioCreateManyAndReturnArgs} args - Arguments to create many Actuacios.
     * @example
     * // Create many Actuacios
     * const actuacio = await prisma.actuacio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actuacios and only return the `id`
     * const actuacioWithIdOnly = await prisma.actuacio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActuacioCreateManyAndReturnArgs>(args?: SelectSubset<T, ActuacioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Actuacio.
     * @param {ActuacioDeleteArgs} args - Arguments to delete one Actuacio.
     * @example
     * // Delete one Actuacio
     * const Actuacio = await prisma.actuacio.delete({
     *   where: {
     *     // ... filter to delete one Actuacio
     *   }
     * })
     * 
     */
    delete<T extends ActuacioDeleteArgs>(args: SelectSubset<T, ActuacioDeleteArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actuacio.
     * @param {ActuacioUpdateArgs} args - Arguments to update one Actuacio.
     * @example
     * // Update one Actuacio
     * const actuacio = await prisma.actuacio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActuacioUpdateArgs>(args: SelectSubset<T, ActuacioUpdateArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actuacios.
     * @param {ActuacioDeleteManyArgs} args - Arguments to filter Actuacios to delete.
     * @example
     * // Delete a few Actuacios
     * const { count } = await prisma.actuacio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActuacioDeleteManyArgs>(args?: SelectSubset<T, ActuacioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actuacios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuacioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actuacios
     * const actuacio = await prisma.actuacio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActuacioUpdateManyArgs>(args: SelectSubset<T, ActuacioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actuacios and returns the data updated in the database.
     * @param {ActuacioUpdateManyAndReturnArgs} args - Arguments to update many Actuacios.
     * @example
     * // Update many Actuacios
     * const actuacio = await prisma.actuacio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actuacios and only return the `id`
     * const actuacioWithIdOnly = await prisma.actuacio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActuacioUpdateManyAndReturnArgs>(args: SelectSubset<T, ActuacioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Actuacio.
     * @param {ActuacioUpsertArgs} args - Arguments to update or create a Actuacio.
     * @example
     * // Update or create a Actuacio
     * const actuacio = await prisma.actuacio.upsert({
     *   create: {
     *     // ... data to create a Actuacio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actuacio we want to update
     *   }
     * })
     */
    upsert<T extends ActuacioUpsertArgs>(args: SelectSubset<T, ActuacioUpsertArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actuacios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuacioCountArgs} args - Arguments to filter Actuacios to count.
     * @example
     * // Count the number of Actuacios
     * const count = await prisma.actuacio.count({
     *   where: {
     *     // ... the filter for the Actuacios we want to count
     *   }
     * })
    **/
    count<T extends ActuacioCountArgs>(
      args?: Subset<T, ActuacioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActuacioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actuacio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuacioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActuacioAggregateArgs>(args: Subset<T, ActuacioAggregateArgs>): Prisma.PrismaPromise<GetActuacioAggregateType<T>>

    /**
     * Group by Actuacio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuacioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActuacioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActuacioGroupByArgs['orderBy'] }
        : { orderBy?: ActuacioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActuacioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActuacioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actuacio model
   */
  readonly fields: ActuacioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actuacio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActuacioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    castells<T extends Actuacio$castellsArgs<ExtArgs> = {}>(args?: Subset<T, Actuacio$castellsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fotos<T extends Actuacio$fotosArgs<ExtArgs> = {}>(args?: Subset<T, Actuacio$fotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    temporada<T extends TemporadaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemporadaDefaultArgs<ExtArgs>>): Prisma__TemporadaClient<$Result.GetResult<Prisma.$TemporadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cronica<T extends Actuacio$cronicaArgs<ExtArgs> = {}>(args?: Subset<T, Actuacio$cronicaArgs<ExtArgs>>): Prisma__CronicaClient<$Result.GetResult<Prisma.$CronicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Actuacio model
   */
  interface ActuacioFieldRefs {
    readonly id: FieldRef<"Actuacio", 'Int'>
    readonly data: FieldRef<"Actuacio", 'DateTime'>
    readonly dataHora: FieldRef<"Actuacio", 'DateTime'>
    readonly lloc: FieldRef<"Actuacio", 'String'>
    readonly ciutat: FieldRef<"Actuacio", 'String'>
    readonly nom: FieldRef<"Actuacio", 'String'>
    readonly temporadaId: FieldRef<"Actuacio", 'Int'>
    readonly cronicaId: FieldRef<"Actuacio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Actuacio findUnique
   */
  export type ActuacioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * Filter, which Actuacio to fetch.
     */
    where: ActuacioWhereUniqueInput
  }

  /**
   * Actuacio findUniqueOrThrow
   */
  export type ActuacioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * Filter, which Actuacio to fetch.
     */
    where: ActuacioWhereUniqueInput
  }

  /**
   * Actuacio findFirst
   */
  export type ActuacioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * Filter, which Actuacio to fetch.
     */
    where?: ActuacioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actuacios to fetch.
     */
    orderBy?: ActuacioOrderByWithRelationInput | ActuacioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actuacios.
     */
    cursor?: ActuacioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actuacios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actuacios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actuacios.
     */
    distinct?: ActuacioScalarFieldEnum | ActuacioScalarFieldEnum[]
  }

  /**
   * Actuacio findFirstOrThrow
   */
  export type ActuacioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * Filter, which Actuacio to fetch.
     */
    where?: ActuacioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actuacios to fetch.
     */
    orderBy?: ActuacioOrderByWithRelationInput | ActuacioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actuacios.
     */
    cursor?: ActuacioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actuacios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actuacios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actuacios.
     */
    distinct?: ActuacioScalarFieldEnum | ActuacioScalarFieldEnum[]
  }

  /**
   * Actuacio findMany
   */
  export type ActuacioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * Filter, which Actuacios to fetch.
     */
    where?: ActuacioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actuacios to fetch.
     */
    orderBy?: ActuacioOrderByWithRelationInput | ActuacioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actuacios.
     */
    cursor?: ActuacioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actuacios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actuacios.
     */
    skip?: number
    distinct?: ActuacioScalarFieldEnum | ActuacioScalarFieldEnum[]
  }

  /**
   * Actuacio create
   */
  export type ActuacioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * The data needed to create a Actuacio.
     */
    data: XOR<ActuacioCreateInput, ActuacioUncheckedCreateInput>
  }

  /**
   * Actuacio createMany
   */
  export type ActuacioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actuacios.
     */
    data: ActuacioCreateManyInput | ActuacioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actuacio createManyAndReturn
   */
  export type ActuacioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * The data used to create many Actuacios.
     */
    data: ActuacioCreateManyInput | ActuacioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Actuacio update
   */
  export type ActuacioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * The data needed to update a Actuacio.
     */
    data: XOR<ActuacioUpdateInput, ActuacioUncheckedUpdateInput>
    /**
     * Choose, which Actuacio to update.
     */
    where: ActuacioWhereUniqueInput
  }

  /**
   * Actuacio updateMany
   */
  export type ActuacioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actuacios.
     */
    data: XOR<ActuacioUpdateManyMutationInput, ActuacioUncheckedUpdateManyInput>
    /**
     * Filter which Actuacios to update
     */
    where?: ActuacioWhereInput
    /**
     * Limit how many Actuacios to update.
     */
    limit?: number
  }

  /**
   * Actuacio updateManyAndReturn
   */
  export type ActuacioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * The data used to update Actuacios.
     */
    data: XOR<ActuacioUpdateManyMutationInput, ActuacioUncheckedUpdateManyInput>
    /**
     * Filter which Actuacios to update
     */
    where?: ActuacioWhereInput
    /**
     * Limit how many Actuacios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Actuacio upsert
   */
  export type ActuacioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * The filter to search for the Actuacio to update in case it exists.
     */
    where: ActuacioWhereUniqueInput
    /**
     * In case the Actuacio found by the `where` argument doesn't exist, create a new Actuacio with this data.
     */
    create: XOR<ActuacioCreateInput, ActuacioUncheckedCreateInput>
    /**
     * In case the Actuacio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActuacioUpdateInput, ActuacioUncheckedUpdateInput>
  }

  /**
   * Actuacio delete
   */
  export type ActuacioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    /**
     * Filter which Actuacio to delete.
     */
    where: ActuacioWhereUniqueInput
  }

  /**
   * Actuacio deleteMany
   */
  export type ActuacioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actuacios to delete
     */
    where?: ActuacioWhereInput
    /**
     * Limit how many Actuacios to delete.
     */
    limit?: number
  }

  /**
   * Actuacio.castells
   */
  export type Actuacio$castellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    where?: CastellWhereInput
    orderBy?: CastellOrderByWithRelationInput | CastellOrderByWithRelationInput[]
    cursor?: CastellWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CastellScalarFieldEnum | CastellScalarFieldEnum[]
  }

  /**
   * Actuacio.fotos
   */
  export type Actuacio$fotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    where?: FotoWhereInput
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    cursor?: FotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Actuacio.cronica
   */
  export type Actuacio$cronicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cronica
     */
    select?: CronicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cronica
     */
    omit?: CronicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CronicaInclude<ExtArgs> | null
    where?: CronicaWhereInput
  }

  /**
   * Actuacio without action
   */
  export type ActuacioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
  }


  /**
   * Model Cronica
   */

  export type AggregateCronica = {
    _count: CronicaCountAggregateOutputType | null
    _avg: CronicaAvgAggregateOutputType | null
    _sum: CronicaSumAggregateOutputType | null
    _min: CronicaMinAggregateOutputType | null
    _max: CronicaMaxAggregateOutputType | null
  }

  export type CronicaAvgAggregateOutputType = {
    id: number | null
    autorId: number | null
    actuacioId: number | null
  }

  export type CronicaSumAggregateOutputType = {
    id: number | null
    autorId: number | null
    actuacioId: number | null
  }

  export type CronicaMinAggregateOutputType = {
    id: number | null
    created: Date | null
    Titol: string | null
    Text: string | null
    autorId: number | null
    actuacioId: number | null
  }

  export type CronicaMaxAggregateOutputType = {
    id: number | null
    created: Date | null
    Titol: string | null
    Text: string | null
    autorId: number | null
    actuacioId: number | null
  }

  export type CronicaCountAggregateOutputType = {
    id: number
    created: number
    Titol: number
    Text: number
    autorId: number
    actuacioId: number
    _all: number
  }


  export type CronicaAvgAggregateInputType = {
    id?: true
    autorId?: true
    actuacioId?: true
  }

  export type CronicaSumAggregateInputType = {
    id?: true
    autorId?: true
    actuacioId?: true
  }

  export type CronicaMinAggregateInputType = {
    id?: true
    created?: true
    Titol?: true
    Text?: true
    autorId?: true
    actuacioId?: true
  }

  export type CronicaMaxAggregateInputType = {
    id?: true
    created?: true
    Titol?: true
    Text?: true
    autorId?: true
    actuacioId?: true
  }

  export type CronicaCountAggregateInputType = {
    id?: true
    created?: true
    Titol?: true
    Text?: true
    autorId?: true
    actuacioId?: true
    _all?: true
  }

  export type CronicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cronica to aggregate.
     */
    where?: CronicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cronicas to fetch.
     */
    orderBy?: CronicaOrderByWithRelationInput | CronicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CronicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cronicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cronicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cronicas
    **/
    _count?: true | CronicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CronicaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CronicaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CronicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CronicaMaxAggregateInputType
  }

  export type GetCronicaAggregateType<T extends CronicaAggregateArgs> = {
        [P in keyof T & keyof AggregateCronica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCronica[P]>
      : GetScalarType<T[P], AggregateCronica[P]>
  }




  export type CronicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CronicaWhereInput
    orderBy?: CronicaOrderByWithAggregationInput | CronicaOrderByWithAggregationInput[]
    by: CronicaScalarFieldEnum[] | CronicaScalarFieldEnum
    having?: CronicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CronicaCountAggregateInputType | true
    _avg?: CronicaAvgAggregateInputType
    _sum?: CronicaSumAggregateInputType
    _min?: CronicaMinAggregateInputType
    _max?: CronicaMaxAggregateInputType
  }

  export type CronicaGroupByOutputType = {
    id: number
    created: Date
    Titol: string
    Text: string
    autorId: number
    actuacioId: number
    _count: CronicaCountAggregateOutputType | null
    _avg: CronicaAvgAggregateOutputType | null
    _sum: CronicaSumAggregateOutputType | null
    _min: CronicaMinAggregateOutputType | null
    _max: CronicaMaxAggregateOutputType | null
  }

  type GetCronicaGroupByPayload<T extends CronicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CronicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CronicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CronicaGroupByOutputType[P]>
            : GetScalarType<T[P], CronicaGroupByOutputType[P]>
        }
      >
    >


  export type CronicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created?: boolean
    Titol?: boolean
    Text?: boolean
    autorId?: boolean
    actuacioId?: boolean
    autor?: boolean | UsuariDefaultArgs<ExtArgs>
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cronica"]>

  export type CronicaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created?: boolean
    Titol?: boolean
    Text?: boolean
    autorId?: boolean
    actuacioId?: boolean
    autor?: boolean | UsuariDefaultArgs<ExtArgs>
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cronica"]>

  export type CronicaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created?: boolean
    Titol?: boolean
    Text?: boolean
    autorId?: boolean
    actuacioId?: boolean
    autor?: boolean | UsuariDefaultArgs<ExtArgs>
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cronica"]>

  export type CronicaSelectScalar = {
    id?: boolean
    created?: boolean
    Titol?: boolean
    Text?: boolean
    autorId?: boolean
    actuacioId?: boolean
  }

  export type CronicaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created" | "Titol" | "Text" | "autorId" | "actuacioId", ExtArgs["result"]["cronica"]>
  export type CronicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuariDefaultArgs<ExtArgs>
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
  }
  export type CronicaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuariDefaultArgs<ExtArgs>
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
  }
  export type CronicaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuariDefaultArgs<ExtArgs>
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
  }

  export type $CronicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cronica"
    objects: {
      autor: Prisma.$UsuariPayload<ExtArgs>
      actuacio: Prisma.$ActuacioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created: Date
      Titol: string
      Text: string
      autorId: number
      actuacioId: number
    }, ExtArgs["result"]["cronica"]>
    composites: {}
  }

  type CronicaGetPayload<S extends boolean | null | undefined | CronicaDefaultArgs> = $Result.GetResult<Prisma.$CronicaPayload, S>

  type CronicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CronicaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CronicaCountAggregateInputType | true
    }

  export interface CronicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cronica'], meta: { name: 'Cronica' } }
    /**
     * Find zero or one Cronica that matches the filter.
     * @param {CronicaFindUniqueArgs} args - Arguments to find a Cronica
     * @example
     * // Get one Cronica
     * const cronica = await prisma.cronica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CronicaFindUniqueArgs>(args: SelectSubset<T, CronicaFindUniqueArgs<ExtArgs>>): Prisma__CronicaClient<$Result.GetResult<Prisma.$CronicaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cronica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CronicaFindUniqueOrThrowArgs} args - Arguments to find a Cronica
     * @example
     * // Get one Cronica
     * const cronica = await prisma.cronica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CronicaFindUniqueOrThrowArgs>(args: SelectSubset<T, CronicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CronicaClient<$Result.GetResult<Prisma.$CronicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cronica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CronicaFindFirstArgs} args - Arguments to find a Cronica
     * @example
     * // Get one Cronica
     * const cronica = await prisma.cronica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CronicaFindFirstArgs>(args?: SelectSubset<T, CronicaFindFirstArgs<ExtArgs>>): Prisma__CronicaClient<$Result.GetResult<Prisma.$CronicaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cronica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CronicaFindFirstOrThrowArgs} args - Arguments to find a Cronica
     * @example
     * // Get one Cronica
     * const cronica = await prisma.cronica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CronicaFindFirstOrThrowArgs>(args?: SelectSubset<T, CronicaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CronicaClient<$Result.GetResult<Prisma.$CronicaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cronicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CronicaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cronicas
     * const cronicas = await prisma.cronica.findMany()
     * 
     * // Get first 10 Cronicas
     * const cronicas = await prisma.cronica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cronicaWithIdOnly = await prisma.cronica.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CronicaFindManyArgs>(args?: SelectSubset<T, CronicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CronicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cronica.
     * @param {CronicaCreateArgs} args - Arguments to create a Cronica.
     * @example
     * // Create one Cronica
     * const Cronica = await prisma.cronica.create({
     *   data: {
     *     // ... data to create a Cronica
     *   }
     * })
     * 
     */
    create<T extends CronicaCreateArgs>(args: SelectSubset<T, CronicaCreateArgs<ExtArgs>>): Prisma__CronicaClient<$Result.GetResult<Prisma.$CronicaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cronicas.
     * @param {CronicaCreateManyArgs} args - Arguments to create many Cronicas.
     * @example
     * // Create many Cronicas
     * const cronica = await prisma.cronica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CronicaCreateManyArgs>(args?: SelectSubset<T, CronicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cronicas and returns the data saved in the database.
     * @param {CronicaCreateManyAndReturnArgs} args - Arguments to create many Cronicas.
     * @example
     * // Create many Cronicas
     * const cronica = await prisma.cronica.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cronicas and only return the `id`
     * const cronicaWithIdOnly = await prisma.cronica.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CronicaCreateManyAndReturnArgs>(args?: SelectSubset<T, CronicaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CronicaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cronica.
     * @param {CronicaDeleteArgs} args - Arguments to delete one Cronica.
     * @example
     * // Delete one Cronica
     * const Cronica = await prisma.cronica.delete({
     *   where: {
     *     // ... filter to delete one Cronica
     *   }
     * })
     * 
     */
    delete<T extends CronicaDeleteArgs>(args: SelectSubset<T, CronicaDeleteArgs<ExtArgs>>): Prisma__CronicaClient<$Result.GetResult<Prisma.$CronicaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cronica.
     * @param {CronicaUpdateArgs} args - Arguments to update one Cronica.
     * @example
     * // Update one Cronica
     * const cronica = await prisma.cronica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CronicaUpdateArgs>(args: SelectSubset<T, CronicaUpdateArgs<ExtArgs>>): Prisma__CronicaClient<$Result.GetResult<Prisma.$CronicaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cronicas.
     * @param {CronicaDeleteManyArgs} args - Arguments to filter Cronicas to delete.
     * @example
     * // Delete a few Cronicas
     * const { count } = await prisma.cronica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CronicaDeleteManyArgs>(args?: SelectSubset<T, CronicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cronicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CronicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cronicas
     * const cronica = await prisma.cronica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CronicaUpdateManyArgs>(args: SelectSubset<T, CronicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cronicas and returns the data updated in the database.
     * @param {CronicaUpdateManyAndReturnArgs} args - Arguments to update many Cronicas.
     * @example
     * // Update many Cronicas
     * const cronica = await prisma.cronica.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cronicas and only return the `id`
     * const cronicaWithIdOnly = await prisma.cronica.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CronicaUpdateManyAndReturnArgs>(args: SelectSubset<T, CronicaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CronicaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cronica.
     * @param {CronicaUpsertArgs} args - Arguments to update or create a Cronica.
     * @example
     * // Update or create a Cronica
     * const cronica = await prisma.cronica.upsert({
     *   create: {
     *     // ... data to create a Cronica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cronica we want to update
     *   }
     * })
     */
    upsert<T extends CronicaUpsertArgs>(args: SelectSubset<T, CronicaUpsertArgs<ExtArgs>>): Prisma__CronicaClient<$Result.GetResult<Prisma.$CronicaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cronicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CronicaCountArgs} args - Arguments to filter Cronicas to count.
     * @example
     * // Count the number of Cronicas
     * const count = await prisma.cronica.count({
     *   where: {
     *     // ... the filter for the Cronicas we want to count
     *   }
     * })
    **/
    count<T extends CronicaCountArgs>(
      args?: Subset<T, CronicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CronicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cronica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CronicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CronicaAggregateArgs>(args: Subset<T, CronicaAggregateArgs>): Prisma.PrismaPromise<GetCronicaAggregateType<T>>

    /**
     * Group by Cronica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CronicaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CronicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CronicaGroupByArgs['orderBy'] }
        : { orderBy?: CronicaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CronicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCronicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cronica model
   */
  readonly fields: CronicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cronica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CronicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autor<T extends UsuariDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariDefaultArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actuacio<T extends ActuacioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActuacioDefaultArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cronica model
   */
  interface CronicaFieldRefs {
    readonly id: FieldRef<"Cronica", 'Int'>
    readonly created: FieldRef<"Cronica", 'DateTime'>
    readonly Titol: FieldRef<"Cronica", 'String'>
    readonly Text: FieldRef<"Cronica", 'String'>
    readonly autorId: FieldRef<"Cronica", 'Int'>
    readonly actuacioId: FieldRef<"Cronica", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cronica findUnique
   */
  export type CronicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cronica
     */
    select?: CronicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cronica
     */
    omit?: CronicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CronicaInclude<ExtArgs> | null
    /**
     * Filter, which Cronica to fetch.
     */
    where: CronicaWhereUniqueInput
  }

  /**
   * Cronica findUniqueOrThrow
   */
  export type CronicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cronica
     */
    select?: CronicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cronica
     */
    omit?: CronicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CronicaInclude<ExtArgs> | null
    /**
     * Filter, which Cronica to fetch.
     */
    where: CronicaWhereUniqueInput
  }

  /**
   * Cronica findFirst
   */
  export type CronicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cronica
     */
    select?: CronicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cronica
     */
    omit?: CronicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CronicaInclude<ExtArgs> | null
    /**
     * Filter, which Cronica to fetch.
     */
    where?: CronicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cronicas to fetch.
     */
    orderBy?: CronicaOrderByWithRelationInput | CronicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cronicas.
     */
    cursor?: CronicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cronicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cronicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cronicas.
     */
    distinct?: CronicaScalarFieldEnum | CronicaScalarFieldEnum[]
  }

  /**
   * Cronica findFirstOrThrow
   */
  export type CronicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cronica
     */
    select?: CronicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cronica
     */
    omit?: CronicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CronicaInclude<ExtArgs> | null
    /**
     * Filter, which Cronica to fetch.
     */
    where?: CronicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cronicas to fetch.
     */
    orderBy?: CronicaOrderByWithRelationInput | CronicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cronicas.
     */
    cursor?: CronicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cronicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cronicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cronicas.
     */
    distinct?: CronicaScalarFieldEnum | CronicaScalarFieldEnum[]
  }

  /**
   * Cronica findMany
   */
  export type CronicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cronica
     */
    select?: CronicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cronica
     */
    omit?: CronicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CronicaInclude<ExtArgs> | null
    /**
     * Filter, which Cronicas to fetch.
     */
    where?: CronicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cronicas to fetch.
     */
    orderBy?: CronicaOrderByWithRelationInput | CronicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cronicas.
     */
    cursor?: CronicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cronicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cronicas.
     */
    skip?: number
    distinct?: CronicaScalarFieldEnum | CronicaScalarFieldEnum[]
  }

  /**
   * Cronica create
   */
  export type CronicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cronica
     */
    select?: CronicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cronica
     */
    omit?: CronicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CronicaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cronica.
     */
    data: XOR<CronicaCreateInput, CronicaUncheckedCreateInput>
  }

  /**
   * Cronica createMany
   */
  export type CronicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cronicas.
     */
    data: CronicaCreateManyInput | CronicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cronica createManyAndReturn
   */
  export type CronicaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cronica
     */
    select?: CronicaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cronica
     */
    omit?: CronicaOmit<ExtArgs> | null
    /**
     * The data used to create many Cronicas.
     */
    data: CronicaCreateManyInput | CronicaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CronicaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cronica update
   */
  export type CronicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cronica
     */
    select?: CronicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cronica
     */
    omit?: CronicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CronicaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cronica.
     */
    data: XOR<CronicaUpdateInput, CronicaUncheckedUpdateInput>
    /**
     * Choose, which Cronica to update.
     */
    where: CronicaWhereUniqueInput
  }

  /**
   * Cronica updateMany
   */
  export type CronicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cronicas.
     */
    data: XOR<CronicaUpdateManyMutationInput, CronicaUncheckedUpdateManyInput>
    /**
     * Filter which Cronicas to update
     */
    where?: CronicaWhereInput
    /**
     * Limit how many Cronicas to update.
     */
    limit?: number
  }

  /**
   * Cronica updateManyAndReturn
   */
  export type CronicaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cronica
     */
    select?: CronicaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cronica
     */
    omit?: CronicaOmit<ExtArgs> | null
    /**
     * The data used to update Cronicas.
     */
    data: XOR<CronicaUpdateManyMutationInput, CronicaUncheckedUpdateManyInput>
    /**
     * Filter which Cronicas to update
     */
    where?: CronicaWhereInput
    /**
     * Limit how many Cronicas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CronicaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cronica upsert
   */
  export type CronicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cronica
     */
    select?: CronicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cronica
     */
    omit?: CronicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CronicaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cronica to update in case it exists.
     */
    where: CronicaWhereUniqueInput
    /**
     * In case the Cronica found by the `where` argument doesn't exist, create a new Cronica with this data.
     */
    create: XOR<CronicaCreateInput, CronicaUncheckedCreateInput>
    /**
     * In case the Cronica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CronicaUpdateInput, CronicaUncheckedUpdateInput>
  }

  /**
   * Cronica delete
   */
  export type CronicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cronica
     */
    select?: CronicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cronica
     */
    omit?: CronicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CronicaInclude<ExtArgs> | null
    /**
     * Filter which Cronica to delete.
     */
    where: CronicaWhereUniqueInput
  }

  /**
   * Cronica deleteMany
   */
  export type CronicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cronicas to delete
     */
    where?: CronicaWhereInput
    /**
     * Limit how many Cronicas to delete.
     */
    limit?: number
  }

  /**
   * Cronica without action
   */
  export type CronicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cronica
     */
    select?: CronicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cronica
     */
    omit?: CronicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CronicaInclude<ExtArgs> | null
  }


  /**
   * Model Castell
   */

  export type AggregateCastell = {
    _count: CastellCountAggregateOutputType | null
    _avg: CastellAvgAggregateOutputType | null
    _sum: CastellSumAggregateOutputType | null
    _min: CastellMinAggregateOutputType | null
    _max: CastellMaxAggregateOutputType | null
  }

  export type CastellAvgAggregateOutputType = {
    id: number | null
    actuacioId: number | null
  }

  export type CastellSumAggregateOutputType = {
    id: number | null
    actuacioId: number | null
  }

  export type CastellMinAggregateOutputType = {
    id: number | null
    nom: string | null
    actuacioId: number | null
    resultat: string | null
  }

  export type CastellMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    actuacioId: number | null
    resultat: string | null
  }

  export type CastellCountAggregateOutputType = {
    id: number
    nom: number
    actuacioId: number
    resultat: number
    _all: number
  }


  export type CastellAvgAggregateInputType = {
    id?: true
    actuacioId?: true
  }

  export type CastellSumAggregateInputType = {
    id?: true
    actuacioId?: true
  }

  export type CastellMinAggregateInputType = {
    id?: true
    nom?: true
    actuacioId?: true
    resultat?: true
  }

  export type CastellMaxAggregateInputType = {
    id?: true
    nom?: true
    actuacioId?: true
    resultat?: true
  }

  export type CastellCountAggregateInputType = {
    id?: true
    nom?: true
    actuacioId?: true
    resultat?: true
    _all?: true
  }

  export type CastellAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Castell to aggregate.
     */
    where?: CastellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Castells to fetch.
     */
    orderBy?: CastellOrderByWithRelationInput | CastellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CastellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Castells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Castells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Castells
    **/
    _count?: true | CastellCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CastellAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CastellSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CastellMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CastellMaxAggregateInputType
  }

  export type GetCastellAggregateType<T extends CastellAggregateArgs> = {
        [P in keyof T & keyof AggregateCastell]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCastell[P]>
      : GetScalarType<T[P], AggregateCastell[P]>
  }




  export type CastellGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CastellWhereInput
    orderBy?: CastellOrderByWithAggregationInput | CastellOrderByWithAggregationInput[]
    by: CastellScalarFieldEnum[] | CastellScalarFieldEnum
    having?: CastellScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CastellCountAggregateInputType | true
    _avg?: CastellAvgAggregateInputType
    _sum?: CastellSumAggregateInputType
    _min?: CastellMinAggregateInputType
    _max?: CastellMaxAggregateInputType
  }

  export type CastellGroupByOutputType = {
    id: number
    nom: string
    actuacioId: number
    resultat: string
    _count: CastellCountAggregateOutputType | null
    _avg: CastellAvgAggregateOutputType | null
    _sum: CastellSumAggregateOutputType | null
    _min: CastellMinAggregateOutputType | null
    _max: CastellMaxAggregateOutputType | null
  }

  type GetCastellGroupByPayload<T extends CastellGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CastellGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CastellGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CastellGroupByOutputType[P]>
            : GetScalarType<T[P], CastellGroupByOutputType[P]>
        }
      >
    >


  export type CastellSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    actuacioId?: boolean
    resultat?: boolean
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
    fotos?: boolean | Castell$fotosArgs<ExtArgs>
    _count?: boolean | CastellCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["castell"]>

  export type CastellSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    actuacioId?: boolean
    resultat?: boolean
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["castell"]>

  export type CastellSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    actuacioId?: boolean
    resultat?: boolean
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["castell"]>

  export type CastellSelectScalar = {
    id?: boolean
    nom?: boolean
    actuacioId?: boolean
    resultat?: boolean
  }

  export type CastellOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "actuacioId" | "resultat", ExtArgs["result"]["castell"]>
  export type CastellInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
    fotos?: boolean | Castell$fotosArgs<ExtArgs>
    _count?: boolean | CastellCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CastellIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
  }
  export type CastellIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
  }

  export type $CastellPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Castell"
    objects: {
      actuacio: Prisma.$ActuacioPayload<ExtArgs>
      fotos: Prisma.$FotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      actuacioId: number
      resultat: string
    }, ExtArgs["result"]["castell"]>
    composites: {}
  }

  type CastellGetPayload<S extends boolean | null | undefined | CastellDefaultArgs> = $Result.GetResult<Prisma.$CastellPayload, S>

  type CastellCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CastellFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CastellCountAggregateInputType | true
    }

  export interface CastellDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Castell'], meta: { name: 'Castell' } }
    /**
     * Find zero or one Castell that matches the filter.
     * @param {CastellFindUniqueArgs} args - Arguments to find a Castell
     * @example
     * // Get one Castell
     * const castell = await prisma.castell.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CastellFindUniqueArgs>(args: SelectSubset<T, CastellFindUniqueArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Castell that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CastellFindUniqueOrThrowArgs} args - Arguments to find a Castell
     * @example
     * // Get one Castell
     * const castell = await prisma.castell.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CastellFindUniqueOrThrowArgs>(args: SelectSubset<T, CastellFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Castell that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastellFindFirstArgs} args - Arguments to find a Castell
     * @example
     * // Get one Castell
     * const castell = await prisma.castell.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CastellFindFirstArgs>(args?: SelectSubset<T, CastellFindFirstArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Castell that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastellFindFirstOrThrowArgs} args - Arguments to find a Castell
     * @example
     * // Get one Castell
     * const castell = await prisma.castell.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CastellFindFirstOrThrowArgs>(args?: SelectSubset<T, CastellFindFirstOrThrowArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Castells that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastellFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Castells
     * const castells = await prisma.castell.findMany()
     * 
     * // Get first 10 Castells
     * const castells = await prisma.castell.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const castellWithIdOnly = await prisma.castell.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CastellFindManyArgs>(args?: SelectSubset<T, CastellFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Castell.
     * @param {CastellCreateArgs} args - Arguments to create a Castell.
     * @example
     * // Create one Castell
     * const Castell = await prisma.castell.create({
     *   data: {
     *     // ... data to create a Castell
     *   }
     * })
     * 
     */
    create<T extends CastellCreateArgs>(args: SelectSubset<T, CastellCreateArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Castells.
     * @param {CastellCreateManyArgs} args - Arguments to create many Castells.
     * @example
     * // Create many Castells
     * const castell = await prisma.castell.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CastellCreateManyArgs>(args?: SelectSubset<T, CastellCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Castells and returns the data saved in the database.
     * @param {CastellCreateManyAndReturnArgs} args - Arguments to create many Castells.
     * @example
     * // Create many Castells
     * const castell = await prisma.castell.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Castells and only return the `id`
     * const castellWithIdOnly = await prisma.castell.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CastellCreateManyAndReturnArgs>(args?: SelectSubset<T, CastellCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Castell.
     * @param {CastellDeleteArgs} args - Arguments to delete one Castell.
     * @example
     * // Delete one Castell
     * const Castell = await prisma.castell.delete({
     *   where: {
     *     // ... filter to delete one Castell
     *   }
     * })
     * 
     */
    delete<T extends CastellDeleteArgs>(args: SelectSubset<T, CastellDeleteArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Castell.
     * @param {CastellUpdateArgs} args - Arguments to update one Castell.
     * @example
     * // Update one Castell
     * const castell = await prisma.castell.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CastellUpdateArgs>(args: SelectSubset<T, CastellUpdateArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Castells.
     * @param {CastellDeleteManyArgs} args - Arguments to filter Castells to delete.
     * @example
     * // Delete a few Castells
     * const { count } = await prisma.castell.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CastellDeleteManyArgs>(args?: SelectSubset<T, CastellDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Castells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastellUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Castells
     * const castell = await prisma.castell.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CastellUpdateManyArgs>(args: SelectSubset<T, CastellUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Castells and returns the data updated in the database.
     * @param {CastellUpdateManyAndReturnArgs} args - Arguments to update many Castells.
     * @example
     * // Update many Castells
     * const castell = await prisma.castell.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Castells and only return the `id`
     * const castellWithIdOnly = await prisma.castell.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CastellUpdateManyAndReturnArgs>(args: SelectSubset<T, CastellUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Castell.
     * @param {CastellUpsertArgs} args - Arguments to update or create a Castell.
     * @example
     * // Update or create a Castell
     * const castell = await prisma.castell.upsert({
     *   create: {
     *     // ... data to create a Castell
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Castell we want to update
     *   }
     * })
     */
    upsert<T extends CastellUpsertArgs>(args: SelectSubset<T, CastellUpsertArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Castells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastellCountArgs} args - Arguments to filter Castells to count.
     * @example
     * // Count the number of Castells
     * const count = await prisma.castell.count({
     *   where: {
     *     // ... the filter for the Castells we want to count
     *   }
     * })
    **/
    count<T extends CastellCountArgs>(
      args?: Subset<T, CastellCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CastellCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Castell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastellAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CastellAggregateArgs>(args: Subset<T, CastellAggregateArgs>): Prisma.PrismaPromise<GetCastellAggregateType<T>>

    /**
     * Group by Castell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastellGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CastellGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CastellGroupByArgs['orderBy'] }
        : { orderBy?: CastellGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CastellGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCastellGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Castell model
   */
  readonly fields: CastellFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Castell.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CastellClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actuacio<T extends ActuacioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActuacioDefaultArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fotos<T extends Castell$fotosArgs<ExtArgs> = {}>(args?: Subset<T, Castell$fotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Castell model
   */
  interface CastellFieldRefs {
    readonly id: FieldRef<"Castell", 'Int'>
    readonly nom: FieldRef<"Castell", 'String'>
    readonly actuacioId: FieldRef<"Castell", 'Int'>
    readonly resultat: FieldRef<"Castell", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Castell findUnique
   */
  export type CastellFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * Filter, which Castell to fetch.
     */
    where: CastellWhereUniqueInput
  }

  /**
   * Castell findUniqueOrThrow
   */
  export type CastellFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * Filter, which Castell to fetch.
     */
    where: CastellWhereUniqueInput
  }

  /**
   * Castell findFirst
   */
  export type CastellFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * Filter, which Castell to fetch.
     */
    where?: CastellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Castells to fetch.
     */
    orderBy?: CastellOrderByWithRelationInput | CastellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Castells.
     */
    cursor?: CastellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Castells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Castells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Castells.
     */
    distinct?: CastellScalarFieldEnum | CastellScalarFieldEnum[]
  }

  /**
   * Castell findFirstOrThrow
   */
  export type CastellFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * Filter, which Castell to fetch.
     */
    where?: CastellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Castells to fetch.
     */
    orderBy?: CastellOrderByWithRelationInput | CastellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Castells.
     */
    cursor?: CastellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Castells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Castells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Castells.
     */
    distinct?: CastellScalarFieldEnum | CastellScalarFieldEnum[]
  }

  /**
   * Castell findMany
   */
  export type CastellFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * Filter, which Castells to fetch.
     */
    where?: CastellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Castells to fetch.
     */
    orderBy?: CastellOrderByWithRelationInput | CastellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Castells.
     */
    cursor?: CastellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Castells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Castells.
     */
    skip?: number
    distinct?: CastellScalarFieldEnum | CastellScalarFieldEnum[]
  }

  /**
   * Castell create
   */
  export type CastellCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * The data needed to create a Castell.
     */
    data: XOR<CastellCreateInput, CastellUncheckedCreateInput>
  }

  /**
   * Castell createMany
   */
  export type CastellCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Castells.
     */
    data: CastellCreateManyInput | CastellCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Castell createManyAndReturn
   */
  export type CastellCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * The data used to create many Castells.
     */
    data: CastellCreateManyInput | CastellCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Castell update
   */
  export type CastellUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * The data needed to update a Castell.
     */
    data: XOR<CastellUpdateInput, CastellUncheckedUpdateInput>
    /**
     * Choose, which Castell to update.
     */
    where: CastellWhereUniqueInput
  }

  /**
   * Castell updateMany
   */
  export type CastellUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Castells.
     */
    data: XOR<CastellUpdateManyMutationInput, CastellUncheckedUpdateManyInput>
    /**
     * Filter which Castells to update
     */
    where?: CastellWhereInput
    /**
     * Limit how many Castells to update.
     */
    limit?: number
  }

  /**
   * Castell updateManyAndReturn
   */
  export type CastellUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * The data used to update Castells.
     */
    data: XOR<CastellUpdateManyMutationInput, CastellUncheckedUpdateManyInput>
    /**
     * Filter which Castells to update
     */
    where?: CastellWhereInput
    /**
     * Limit how many Castells to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Castell upsert
   */
  export type CastellUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * The filter to search for the Castell to update in case it exists.
     */
    where: CastellWhereUniqueInput
    /**
     * In case the Castell found by the `where` argument doesn't exist, create a new Castell with this data.
     */
    create: XOR<CastellCreateInput, CastellUncheckedCreateInput>
    /**
     * In case the Castell was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CastellUpdateInput, CastellUncheckedUpdateInput>
  }

  /**
   * Castell delete
   */
  export type CastellDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    /**
     * Filter which Castell to delete.
     */
    where: CastellWhereUniqueInput
  }

  /**
   * Castell deleteMany
   */
  export type CastellDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Castells to delete
     */
    where?: CastellWhereInput
    /**
     * Limit how many Castells to delete.
     */
    limit?: number
  }

  /**
   * Castell.fotos
   */
  export type Castell$fotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    where?: FotoWhereInput
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    cursor?: FotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Castell without action
   */
  export type CastellDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
  }


  /**
   * Model Usuari
   */

  export type AggregateUsuari = {
    _count: UsuariCountAggregateOutputType | null
    _avg: UsuariAvgAggregateOutputType | null
    _sum: UsuariSumAggregateOutputType | null
    _min: UsuariMinAggregateOutputType | null
    _max: UsuariMaxAggregateOutputType | null
  }

  export type UsuariAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuariSumAggregateOutputType = {
    id: number | null
  }

  export type UsuariMinAggregateOutputType = {
    id: number | null
    correu: string | null
    contrassenya: string | null
    nom: string | null
  }

  export type UsuariMaxAggregateOutputType = {
    id: number | null
    correu: string | null
    contrassenya: string | null
    nom: string | null
  }

  export type UsuariCountAggregateOutputType = {
    id: number
    correu: number
    contrassenya: number
    nom: number
    _all: number
  }


  export type UsuariAvgAggregateInputType = {
    id?: true
  }

  export type UsuariSumAggregateInputType = {
    id?: true
  }

  export type UsuariMinAggregateInputType = {
    id?: true
    correu?: true
    contrassenya?: true
    nom?: true
  }

  export type UsuariMaxAggregateInputType = {
    id?: true
    correu?: true
    contrassenya?: true
    nom?: true
  }

  export type UsuariCountAggregateInputType = {
    id?: true
    correu?: true
    contrassenya?: true
    nom?: true
    _all?: true
  }

  export type UsuariAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuari to aggregate.
     */
    where?: UsuariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuaris to fetch.
     */
    orderBy?: UsuariOrderByWithRelationInput | UsuariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuaris
    **/
    _count?: true | UsuariCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariMaxAggregateInputType
  }

  export type GetUsuariAggregateType<T extends UsuariAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuari]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuari[P]>
      : GetScalarType<T[P], AggregateUsuari[P]>
  }




  export type UsuariGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariWhereInput
    orderBy?: UsuariOrderByWithAggregationInput | UsuariOrderByWithAggregationInput[]
    by: UsuariScalarFieldEnum[] | UsuariScalarFieldEnum
    having?: UsuariScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariCountAggregateInputType | true
    _avg?: UsuariAvgAggregateInputType
    _sum?: UsuariSumAggregateInputType
    _min?: UsuariMinAggregateInputType
    _max?: UsuariMaxAggregateInputType
  }

  export type UsuariGroupByOutputType = {
    id: number
    correu: string
    contrassenya: string
    nom: string
    _count: UsuariCountAggregateOutputType | null
    _avg: UsuariAvgAggregateOutputType | null
    _sum: UsuariSumAggregateOutputType | null
    _min: UsuariMinAggregateOutputType | null
    _max: UsuariMaxAggregateOutputType | null
  }

  type GetUsuariGroupByPayload<T extends UsuariGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariGroupByOutputType[P]>
        }
      >
    >


  export type UsuariSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correu?: boolean
    contrassenya?: boolean
    nom?: boolean
    fotos?: boolean | Usuari$fotosArgs<ExtArgs>
    croniques?: boolean | Usuari$croniquesArgs<ExtArgs>
    _count?: boolean | UsuariCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuari"]>

  export type UsuariSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correu?: boolean
    contrassenya?: boolean
    nom?: boolean
  }, ExtArgs["result"]["usuari"]>

  export type UsuariSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correu?: boolean
    contrassenya?: boolean
    nom?: boolean
  }, ExtArgs["result"]["usuari"]>

  export type UsuariSelectScalar = {
    id?: boolean
    correu?: boolean
    contrassenya?: boolean
    nom?: boolean
  }

  export type UsuariOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "correu" | "contrassenya" | "nom", ExtArgs["result"]["usuari"]>
  export type UsuariInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotos?: boolean | Usuari$fotosArgs<ExtArgs>
    croniques?: boolean | Usuari$croniquesArgs<ExtArgs>
    _count?: boolean | UsuariCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuariIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuariIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuariPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuari"
    objects: {
      fotos: Prisma.$FotoPayload<ExtArgs>[]
      croniques: Prisma.$CronicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      correu: string
      contrassenya: string
      nom: string
    }, ExtArgs["result"]["usuari"]>
    composites: {}
  }

  type UsuariGetPayload<S extends boolean | null | undefined | UsuariDefaultArgs> = $Result.GetResult<Prisma.$UsuariPayload, S>

  type UsuariCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariCountAggregateInputType | true
    }

  export interface UsuariDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuari'], meta: { name: 'Usuari' } }
    /**
     * Find zero or one Usuari that matches the filter.
     * @param {UsuariFindUniqueArgs} args - Arguments to find a Usuari
     * @example
     * // Get one Usuari
     * const usuari = await prisma.usuari.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariFindUniqueArgs>(args: SelectSubset<T, UsuariFindUniqueArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuari that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariFindUniqueOrThrowArgs} args - Arguments to find a Usuari
     * @example
     * // Get one Usuari
     * const usuari = await prisma.usuari.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuari that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariFindFirstArgs} args - Arguments to find a Usuari
     * @example
     * // Get one Usuari
     * const usuari = await prisma.usuari.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariFindFirstArgs>(args?: SelectSubset<T, UsuariFindFirstArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuari that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariFindFirstOrThrowArgs} args - Arguments to find a Usuari
     * @example
     * // Get one Usuari
     * const usuari = await prisma.usuari.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuaris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuaris
     * const usuaris = await prisma.usuari.findMany()
     * 
     * // Get first 10 Usuaris
     * const usuaris = await prisma.usuari.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariWithIdOnly = await prisma.usuari.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuariFindManyArgs>(args?: SelectSubset<T, UsuariFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuari.
     * @param {UsuariCreateArgs} args - Arguments to create a Usuari.
     * @example
     * // Create one Usuari
     * const Usuari = await prisma.usuari.create({
     *   data: {
     *     // ... data to create a Usuari
     *   }
     * })
     * 
     */
    create<T extends UsuariCreateArgs>(args: SelectSubset<T, UsuariCreateArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuaris.
     * @param {UsuariCreateManyArgs} args - Arguments to create many Usuaris.
     * @example
     * // Create many Usuaris
     * const usuari = await prisma.usuari.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariCreateManyArgs>(args?: SelectSubset<T, UsuariCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuaris and returns the data saved in the database.
     * @param {UsuariCreateManyAndReturnArgs} args - Arguments to create many Usuaris.
     * @example
     * // Create many Usuaris
     * const usuari = await prisma.usuari.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuaris and only return the `id`
     * const usuariWithIdOnly = await prisma.usuari.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuariCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuariCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuari.
     * @param {UsuariDeleteArgs} args - Arguments to delete one Usuari.
     * @example
     * // Delete one Usuari
     * const Usuari = await prisma.usuari.delete({
     *   where: {
     *     // ... filter to delete one Usuari
     *   }
     * })
     * 
     */
    delete<T extends UsuariDeleteArgs>(args: SelectSubset<T, UsuariDeleteArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuari.
     * @param {UsuariUpdateArgs} args - Arguments to update one Usuari.
     * @example
     * // Update one Usuari
     * const usuari = await prisma.usuari.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariUpdateArgs>(args: SelectSubset<T, UsuariUpdateArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuaris.
     * @param {UsuariDeleteManyArgs} args - Arguments to filter Usuaris to delete.
     * @example
     * // Delete a few Usuaris
     * const { count } = await prisma.usuari.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariDeleteManyArgs>(args?: SelectSubset<T, UsuariDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuaris
     * const usuari = await prisma.usuari.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariUpdateManyArgs>(args: SelectSubset<T, UsuariUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuaris and returns the data updated in the database.
     * @param {UsuariUpdateManyAndReturnArgs} args - Arguments to update many Usuaris.
     * @example
     * // Update many Usuaris
     * const usuari = await prisma.usuari.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuaris and only return the `id`
     * const usuariWithIdOnly = await prisma.usuari.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuariUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuariUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuari.
     * @param {UsuariUpsertArgs} args - Arguments to update or create a Usuari.
     * @example
     * // Update or create a Usuari
     * const usuari = await prisma.usuari.upsert({
     *   create: {
     *     // ... data to create a Usuari
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuari we want to update
     *   }
     * })
     */
    upsert<T extends UsuariUpsertArgs>(args: SelectSubset<T, UsuariUpsertArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariCountArgs} args - Arguments to filter Usuaris to count.
     * @example
     * // Count the number of Usuaris
     * const count = await prisma.usuari.count({
     *   where: {
     *     // ... the filter for the Usuaris we want to count
     *   }
     * })
    **/
    count<T extends UsuariCountArgs>(
      args?: Subset<T, UsuariCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuari.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariAggregateArgs>(args: Subset<T, UsuariAggregateArgs>): Prisma.PrismaPromise<GetUsuariAggregateType<T>>

    /**
     * Group by Usuari.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuariGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariGroupByArgs['orderBy'] }
        : { orderBy?: UsuariGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuariGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuari model
   */
  readonly fields: UsuariFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuari.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fotos<T extends Usuari$fotosArgs<ExtArgs> = {}>(args?: Subset<T, Usuari$fotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    croniques<T extends Usuari$croniquesArgs<ExtArgs> = {}>(args?: Subset<T, Usuari$croniquesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CronicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuari model
   */
  interface UsuariFieldRefs {
    readonly id: FieldRef<"Usuari", 'Int'>
    readonly correu: FieldRef<"Usuari", 'String'>
    readonly contrassenya: FieldRef<"Usuari", 'String'>
    readonly nom: FieldRef<"Usuari", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuari findUnique
   */
  export type UsuariFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariInclude<ExtArgs> | null
    /**
     * Filter, which Usuari to fetch.
     */
    where: UsuariWhereUniqueInput
  }

  /**
   * Usuari findUniqueOrThrow
   */
  export type UsuariFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariInclude<ExtArgs> | null
    /**
     * Filter, which Usuari to fetch.
     */
    where: UsuariWhereUniqueInput
  }

  /**
   * Usuari findFirst
   */
  export type UsuariFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariInclude<ExtArgs> | null
    /**
     * Filter, which Usuari to fetch.
     */
    where?: UsuariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuaris to fetch.
     */
    orderBy?: UsuariOrderByWithRelationInput | UsuariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuaris.
     */
    cursor?: UsuariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuaris.
     */
    distinct?: UsuariScalarFieldEnum | UsuariScalarFieldEnum[]
  }

  /**
   * Usuari findFirstOrThrow
   */
  export type UsuariFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariInclude<ExtArgs> | null
    /**
     * Filter, which Usuari to fetch.
     */
    where?: UsuariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuaris to fetch.
     */
    orderBy?: UsuariOrderByWithRelationInput | UsuariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuaris.
     */
    cursor?: UsuariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuaris.
     */
    distinct?: UsuariScalarFieldEnum | UsuariScalarFieldEnum[]
  }

  /**
   * Usuari findMany
   */
  export type UsuariFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariInclude<ExtArgs> | null
    /**
     * Filter, which Usuaris to fetch.
     */
    where?: UsuariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuaris to fetch.
     */
    orderBy?: UsuariOrderByWithRelationInput | UsuariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuaris.
     */
    cursor?: UsuariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuaris.
     */
    skip?: number
    distinct?: UsuariScalarFieldEnum | UsuariScalarFieldEnum[]
  }

  /**
   * Usuari create
   */
  export type UsuariCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuari.
     */
    data: XOR<UsuariCreateInput, UsuariUncheckedCreateInput>
  }

  /**
   * Usuari createMany
   */
  export type UsuariCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuaris.
     */
    data: UsuariCreateManyInput | UsuariCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuari createManyAndReturn
   */
  export type UsuariCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * The data used to create many Usuaris.
     */
    data: UsuariCreateManyInput | UsuariCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuari update
   */
  export type UsuariUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuari.
     */
    data: XOR<UsuariUpdateInput, UsuariUncheckedUpdateInput>
    /**
     * Choose, which Usuari to update.
     */
    where: UsuariWhereUniqueInput
  }

  /**
   * Usuari updateMany
   */
  export type UsuariUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuaris.
     */
    data: XOR<UsuariUpdateManyMutationInput, UsuariUncheckedUpdateManyInput>
    /**
     * Filter which Usuaris to update
     */
    where?: UsuariWhereInput
    /**
     * Limit how many Usuaris to update.
     */
    limit?: number
  }

  /**
   * Usuari updateManyAndReturn
   */
  export type UsuariUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * The data used to update Usuaris.
     */
    data: XOR<UsuariUpdateManyMutationInput, UsuariUncheckedUpdateManyInput>
    /**
     * Filter which Usuaris to update
     */
    where?: UsuariWhereInput
    /**
     * Limit how many Usuaris to update.
     */
    limit?: number
  }

  /**
   * Usuari upsert
   */
  export type UsuariUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuari to update in case it exists.
     */
    where: UsuariWhereUniqueInput
    /**
     * In case the Usuari found by the `where` argument doesn't exist, create a new Usuari with this data.
     */
    create: XOR<UsuariCreateInput, UsuariUncheckedCreateInput>
    /**
     * In case the Usuari was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariUpdateInput, UsuariUncheckedUpdateInput>
  }

  /**
   * Usuari delete
   */
  export type UsuariDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariInclude<ExtArgs> | null
    /**
     * Filter which Usuari to delete.
     */
    where: UsuariWhereUniqueInput
  }

  /**
   * Usuari deleteMany
   */
  export type UsuariDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuaris to delete
     */
    where?: UsuariWhereInput
    /**
     * Limit how many Usuaris to delete.
     */
    limit?: number
  }

  /**
   * Usuari.fotos
   */
  export type Usuari$fotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    where?: FotoWhereInput
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    cursor?: FotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Usuari.croniques
   */
  export type Usuari$croniquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cronica
     */
    select?: CronicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cronica
     */
    omit?: CronicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CronicaInclude<ExtArgs> | null
    where?: CronicaWhereInput
    orderBy?: CronicaOrderByWithRelationInput | CronicaOrderByWithRelationInput[]
    cursor?: CronicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CronicaScalarFieldEnum | CronicaScalarFieldEnum[]
  }

  /**
   * Usuari without action
   */
  export type UsuariDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuari
     */
    select?: UsuariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuari
     */
    omit?: UsuariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariInclude<ExtArgs> | null
  }


  /**
   * Model Foto
   */

  export type AggregateFoto = {
    _count: FotoCountAggregateOutputType | null
    _avg: FotoAvgAggregateOutputType | null
    _sum: FotoSumAggregateOutputType | null
    _min: FotoMinAggregateOutputType | null
    _max: FotoMaxAggregateOutputType | null
  }

  export type FotoAvgAggregateOutputType = {
    id: number | null
    autorId: number | null
    actuacioId: number | null
    castellId: number | null
  }

  export type FotoSumAggregateOutputType = {
    id: number | null
    autorId: number | null
    actuacioId: number | null
    castellId: number | null
  }

  export type FotoMinAggregateOutputType = {
    id: number | null
    created: Date | null
    name: string | null
    url: string | null
    autorId: number | null
    mainFoto: boolean | null
    actuacioId: number | null
    castellId: number | null
  }

  export type FotoMaxAggregateOutputType = {
    id: number | null
    created: Date | null
    name: string | null
    url: string | null
    autorId: number | null
    mainFoto: boolean | null
    actuacioId: number | null
    castellId: number | null
  }

  export type FotoCountAggregateOutputType = {
    id: number
    created: number
    name: number
    url: number
    autorId: number
    mainFoto: number
    actuacioId: number
    castellId: number
    _all: number
  }


  export type FotoAvgAggregateInputType = {
    id?: true
    autorId?: true
    actuacioId?: true
    castellId?: true
  }

  export type FotoSumAggregateInputType = {
    id?: true
    autorId?: true
    actuacioId?: true
    castellId?: true
  }

  export type FotoMinAggregateInputType = {
    id?: true
    created?: true
    name?: true
    url?: true
    autorId?: true
    mainFoto?: true
    actuacioId?: true
    castellId?: true
  }

  export type FotoMaxAggregateInputType = {
    id?: true
    created?: true
    name?: true
    url?: true
    autorId?: true
    mainFoto?: true
    actuacioId?: true
    castellId?: true
  }

  export type FotoCountAggregateInputType = {
    id?: true
    created?: true
    name?: true
    url?: true
    autorId?: true
    mainFoto?: true
    actuacioId?: true
    castellId?: true
    _all?: true
  }

  export type FotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foto to aggregate.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fotos
    **/
    _count?: true | FotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotoMaxAggregateInputType
  }

  export type GetFotoAggregateType<T extends FotoAggregateArgs> = {
        [P in keyof T & keyof AggregateFoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoto[P]>
      : GetScalarType<T[P], AggregateFoto[P]>
  }




  export type FotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoWhereInput
    orderBy?: FotoOrderByWithAggregationInput | FotoOrderByWithAggregationInput[]
    by: FotoScalarFieldEnum[] | FotoScalarFieldEnum
    having?: FotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotoCountAggregateInputType | true
    _avg?: FotoAvgAggregateInputType
    _sum?: FotoSumAggregateInputType
    _min?: FotoMinAggregateInputType
    _max?: FotoMaxAggregateInputType
  }

  export type FotoGroupByOutputType = {
    id: number
    created: Date
    name: string
    url: string | null
    autorId: number
    mainFoto: boolean
    actuacioId: number
    castellId: number
    _count: FotoCountAggregateOutputType | null
    _avg: FotoAvgAggregateOutputType | null
    _sum: FotoSumAggregateOutputType | null
    _min: FotoMinAggregateOutputType | null
    _max: FotoMaxAggregateOutputType | null
  }

  type GetFotoGroupByPayload<T extends FotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotoGroupByOutputType[P]>
            : GetScalarType<T[P], FotoGroupByOutputType[P]>
        }
      >
    >


  export type FotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created?: boolean
    name?: boolean
    url?: boolean
    autorId?: boolean
    mainFoto?: boolean
    actuacioId?: boolean
    castellId?: boolean
    autor?: boolean | UsuariDefaultArgs<ExtArgs>
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
    castell?: boolean | Foto$castellArgs<ExtArgs>
  }, ExtArgs["result"]["foto"]>

  export type FotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created?: boolean
    name?: boolean
    url?: boolean
    autorId?: boolean
    mainFoto?: boolean
    actuacioId?: boolean
    castellId?: boolean
    autor?: boolean | UsuariDefaultArgs<ExtArgs>
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
    castell?: boolean | Foto$castellArgs<ExtArgs>
  }, ExtArgs["result"]["foto"]>

  export type FotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created?: boolean
    name?: boolean
    url?: boolean
    autorId?: boolean
    mainFoto?: boolean
    actuacioId?: boolean
    castellId?: boolean
    autor?: boolean | UsuariDefaultArgs<ExtArgs>
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
    castell?: boolean | Foto$castellArgs<ExtArgs>
  }, ExtArgs["result"]["foto"]>

  export type FotoSelectScalar = {
    id?: boolean
    created?: boolean
    name?: boolean
    url?: boolean
    autorId?: boolean
    mainFoto?: boolean
    actuacioId?: boolean
    castellId?: boolean
  }

  export type FotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created" | "name" | "url" | "autorId" | "mainFoto" | "actuacioId" | "castellId", ExtArgs["result"]["foto"]>
  export type FotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuariDefaultArgs<ExtArgs>
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
    castell?: boolean | Foto$castellArgs<ExtArgs>
  }
  export type FotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuariDefaultArgs<ExtArgs>
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
    castell?: boolean | Foto$castellArgs<ExtArgs>
  }
  export type FotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuariDefaultArgs<ExtArgs>
    actuacio?: boolean | ActuacioDefaultArgs<ExtArgs>
    castell?: boolean | Foto$castellArgs<ExtArgs>
  }

  export type $FotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Foto"
    objects: {
      autor: Prisma.$UsuariPayload<ExtArgs>
      actuacio: Prisma.$ActuacioPayload<ExtArgs>
      castell: Prisma.$CastellPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created: Date
      name: string
      url: string | null
      autorId: number
      mainFoto: boolean
      actuacioId: number
      castellId: number
    }, ExtArgs["result"]["foto"]>
    composites: {}
  }

  type FotoGetPayload<S extends boolean | null | undefined | FotoDefaultArgs> = $Result.GetResult<Prisma.$FotoPayload, S>

  type FotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FotoCountAggregateInputType | true
    }

  export interface FotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Foto'], meta: { name: 'Foto' } }
    /**
     * Find zero or one Foto that matches the filter.
     * @param {FotoFindUniqueArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FotoFindUniqueArgs>(args: SelectSubset<T, FotoFindUniqueArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Foto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FotoFindUniqueOrThrowArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FotoFindUniqueOrThrowArgs>(args: SelectSubset<T, FotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindFirstArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FotoFindFirstArgs>(args?: SelectSubset<T, FotoFindFirstArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindFirstOrThrowArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FotoFindFirstOrThrowArgs>(args?: SelectSubset<T, FotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fotos
     * const fotos = await prisma.foto.findMany()
     * 
     * // Get first 10 Fotos
     * const fotos = await prisma.foto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fotoWithIdOnly = await prisma.foto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FotoFindManyArgs>(args?: SelectSubset<T, FotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Foto.
     * @param {FotoCreateArgs} args - Arguments to create a Foto.
     * @example
     * // Create one Foto
     * const Foto = await prisma.foto.create({
     *   data: {
     *     // ... data to create a Foto
     *   }
     * })
     * 
     */
    create<T extends FotoCreateArgs>(args: SelectSubset<T, FotoCreateArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fotos.
     * @param {FotoCreateManyArgs} args - Arguments to create many Fotos.
     * @example
     * // Create many Fotos
     * const foto = await prisma.foto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FotoCreateManyArgs>(args?: SelectSubset<T, FotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fotos and returns the data saved in the database.
     * @param {FotoCreateManyAndReturnArgs} args - Arguments to create many Fotos.
     * @example
     * // Create many Fotos
     * const foto = await prisma.foto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fotos and only return the `id`
     * const fotoWithIdOnly = await prisma.foto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FotoCreateManyAndReturnArgs>(args?: SelectSubset<T, FotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Foto.
     * @param {FotoDeleteArgs} args - Arguments to delete one Foto.
     * @example
     * // Delete one Foto
     * const Foto = await prisma.foto.delete({
     *   where: {
     *     // ... filter to delete one Foto
     *   }
     * })
     * 
     */
    delete<T extends FotoDeleteArgs>(args: SelectSubset<T, FotoDeleteArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Foto.
     * @param {FotoUpdateArgs} args - Arguments to update one Foto.
     * @example
     * // Update one Foto
     * const foto = await prisma.foto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FotoUpdateArgs>(args: SelectSubset<T, FotoUpdateArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fotos.
     * @param {FotoDeleteManyArgs} args - Arguments to filter Fotos to delete.
     * @example
     * // Delete a few Fotos
     * const { count } = await prisma.foto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FotoDeleteManyArgs>(args?: SelectSubset<T, FotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fotos
     * const foto = await prisma.foto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FotoUpdateManyArgs>(args: SelectSubset<T, FotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fotos and returns the data updated in the database.
     * @param {FotoUpdateManyAndReturnArgs} args - Arguments to update many Fotos.
     * @example
     * // Update many Fotos
     * const foto = await prisma.foto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fotos and only return the `id`
     * const fotoWithIdOnly = await prisma.foto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FotoUpdateManyAndReturnArgs>(args: SelectSubset<T, FotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Foto.
     * @param {FotoUpsertArgs} args - Arguments to update or create a Foto.
     * @example
     * // Update or create a Foto
     * const foto = await prisma.foto.upsert({
     *   create: {
     *     // ... data to create a Foto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Foto we want to update
     *   }
     * })
     */
    upsert<T extends FotoUpsertArgs>(args: SelectSubset<T, FotoUpsertArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoCountArgs} args - Arguments to filter Fotos to count.
     * @example
     * // Count the number of Fotos
     * const count = await prisma.foto.count({
     *   where: {
     *     // ... the filter for the Fotos we want to count
     *   }
     * })
    **/
    count<T extends FotoCountArgs>(
      args?: Subset<T, FotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Foto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FotoAggregateArgs>(args: Subset<T, FotoAggregateArgs>): Prisma.PrismaPromise<GetFotoAggregateType<T>>

    /**
     * Group by Foto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FotoGroupByArgs['orderBy'] }
        : { orderBy?: FotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Foto model
   */
  readonly fields: FotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Foto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autor<T extends UsuariDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariDefaultArgs<ExtArgs>>): Prisma__UsuariClient<$Result.GetResult<Prisma.$UsuariPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actuacio<T extends ActuacioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActuacioDefaultArgs<ExtArgs>>): Prisma__ActuacioClient<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    castell<T extends Foto$castellArgs<ExtArgs> = {}>(args?: Subset<T, Foto$castellArgs<ExtArgs>>): Prisma__CastellClient<$Result.GetResult<Prisma.$CastellPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Foto model
   */
  interface FotoFieldRefs {
    readonly id: FieldRef<"Foto", 'Int'>
    readonly created: FieldRef<"Foto", 'DateTime'>
    readonly name: FieldRef<"Foto", 'String'>
    readonly url: FieldRef<"Foto", 'String'>
    readonly autorId: FieldRef<"Foto", 'Int'>
    readonly mainFoto: FieldRef<"Foto", 'Boolean'>
    readonly actuacioId: FieldRef<"Foto", 'Int'>
    readonly castellId: FieldRef<"Foto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Foto findUnique
   */
  export type FotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto findUniqueOrThrow
   */
  export type FotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto findFirst
   */
  export type FotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotos.
     */
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto findFirstOrThrow
   */
  export type FotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotos.
     */
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto findMany
   */
  export type FotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Fotos to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto create
   */
  export type FotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Foto.
     */
    data: XOR<FotoCreateInput, FotoUncheckedCreateInput>
  }

  /**
   * Foto createMany
   */
  export type FotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fotos.
     */
    data: FotoCreateManyInput | FotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Foto createManyAndReturn
   */
  export type FotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * The data used to create many Fotos.
     */
    data: FotoCreateManyInput | FotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Foto update
   */
  export type FotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Foto.
     */
    data: XOR<FotoUpdateInput, FotoUncheckedUpdateInput>
    /**
     * Choose, which Foto to update.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto updateMany
   */
  export type FotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fotos.
     */
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyInput>
    /**
     * Filter which Fotos to update
     */
    where?: FotoWhereInput
    /**
     * Limit how many Fotos to update.
     */
    limit?: number
  }

  /**
   * Foto updateManyAndReturn
   */
  export type FotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * The data used to update Fotos.
     */
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyInput>
    /**
     * Filter which Fotos to update
     */
    where?: FotoWhereInput
    /**
     * Limit how many Fotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Foto upsert
   */
  export type FotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Foto to update in case it exists.
     */
    where: FotoWhereUniqueInput
    /**
     * In case the Foto found by the `where` argument doesn't exist, create a new Foto with this data.
     */
    create: XOR<FotoCreateInput, FotoUncheckedCreateInput>
    /**
     * In case the Foto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FotoUpdateInput, FotoUncheckedUpdateInput>
  }

  /**
   * Foto delete
   */
  export type FotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter which Foto to delete.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto deleteMany
   */
  export type FotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fotos to delete
     */
    where?: FotoWhereInput
    /**
     * Limit how many Fotos to delete.
     */
    limit?: number
  }

  /**
   * Foto.castell
   */
  export type Foto$castellArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Castell
     */
    select?: CastellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Castell
     */
    omit?: CastellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastellInclude<ExtArgs> | null
    where?: CastellWhereInput
  }

  /**
   * Foto without action
   */
  export type FotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
  }


  /**
   * Model Temporada
   */

  export type AggregateTemporada = {
    _count: TemporadaCountAggregateOutputType | null
    _avg: TemporadaAvgAggregateOutputType | null
    _sum: TemporadaSumAggregateOutputType | null
    _min: TemporadaMinAggregateOutputType | null
    _max: TemporadaMaxAggregateOutputType | null
  }

  export type TemporadaAvgAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type TemporadaSumAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type TemporadaMinAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type TemporadaMaxAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type TemporadaCountAggregateOutputType = {
    id: number
    year: number
    _all: number
  }


  export type TemporadaAvgAggregateInputType = {
    id?: true
    year?: true
  }

  export type TemporadaSumAggregateInputType = {
    id?: true
    year?: true
  }

  export type TemporadaMinAggregateInputType = {
    id?: true
    year?: true
  }

  export type TemporadaMaxAggregateInputType = {
    id?: true
    year?: true
  }

  export type TemporadaCountAggregateInputType = {
    id?: true
    year?: true
    _all?: true
  }

  export type TemporadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Temporada to aggregate.
     */
    where?: TemporadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Temporadas to fetch.
     */
    orderBy?: TemporadaOrderByWithRelationInput | TemporadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemporadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Temporadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Temporadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Temporadas
    **/
    _count?: true | TemporadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemporadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemporadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemporadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemporadaMaxAggregateInputType
  }

  export type GetTemporadaAggregateType<T extends TemporadaAggregateArgs> = {
        [P in keyof T & keyof AggregateTemporada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemporada[P]>
      : GetScalarType<T[P], AggregateTemporada[P]>
  }




  export type TemporadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemporadaWhereInput
    orderBy?: TemporadaOrderByWithAggregationInput | TemporadaOrderByWithAggregationInput[]
    by: TemporadaScalarFieldEnum[] | TemporadaScalarFieldEnum
    having?: TemporadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemporadaCountAggregateInputType | true
    _avg?: TemporadaAvgAggregateInputType
    _sum?: TemporadaSumAggregateInputType
    _min?: TemporadaMinAggregateInputType
    _max?: TemporadaMaxAggregateInputType
  }

  export type TemporadaGroupByOutputType = {
    id: number
    year: number
    _count: TemporadaCountAggregateOutputType | null
    _avg: TemporadaAvgAggregateOutputType | null
    _sum: TemporadaSumAggregateOutputType | null
    _min: TemporadaMinAggregateOutputType | null
    _max: TemporadaMaxAggregateOutputType | null
  }

  type GetTemporadaGroupByPayload<T extends TemporadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemporadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemporadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemporadaGroupByOutputType[P]>
            : GetScalarType<T[P], TemporadaGroupByOutputType[P]>
        }
      >
    >


  export type TemporadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    actuacions?: boolean | Temporada$actuacionsArgs<ExtArgs>
    _count?: boolean | TemporadaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["temporada"]>

  export type TemporadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
  }, ExtArgs["result"]["temporada"]>

  export type TemporadaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
  }, ExtArgs["result"]["temporada"]>

  export type TemporadaSelectScalar = {
    id?: boolean
    year?: boolean
  }

  export type TemporadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year", ExtArgs["result"]["temporada"]>
  export type TemporadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actuacions?: boolean | Temporada$actuacionsArgs<ExtArgs>
    _count?: boolean | TemporadaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemporadaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TemporadaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TemporadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Temporada"
    objects: {
      actuacions: Prisma.$ActuacioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: number
    }, ExtArgs["result"]["temporada"]>
    composites: {}
  }

  type TemporadaGetPayload<S extends boolean | null | undefined | TemporadaDefaultArgs> = $Result.GetResult<Prisma.$TemporadaPayload, S>

  type TemporadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemporadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemporadaCountAggregateInputType | true
    }

  export interface TemporadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Temporada'], meta: { name: 'Temporada' } }
    /**
     * Find zero or one Temporada that matches the filter.
     * @param {TemporadaFindUniqueArgs} args - Arguments to find a Temporada
     * @example
     * // Get one Temporada
     * const temporada = await prisma.temporada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemporadaFindUniqueArgs>(args: SelectSubset<T, TemporadaFindUniqueArgs<ExtArgs>>): Prisma__TemporadaClient<$Result.GetResult<Prisma.$TemporadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Temporada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemporadaFindUniqueOrThrowArgs} args - Arguments to find a Temporada
     * @example
     * // Get one Temporada
     * const temporada = await prisma.temporada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemporadaFindUniqueOrThrowArgs>(args: SelectSubset<T, TemporadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemporadaClient<$Result.GetResult<Prisma.$TemporadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Temporada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporadaFindFirstArgs} args - Arguments to find a Temporada
     * @example
     * // Get one Temporada
     * const temporada = await prisma.temporada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemporadaFindFirstArgs>(args?: SelectSubset<T, TemporadaFindFirstArgs<ExtArgs>>): Prisma__TemporadaClient<$Result.GetResult<Prisma.$TemporadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Temporada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporadaFindFirstOrThrowArgs} args - Arguments to find a Temporada
     * @example
     * // Get one Temporada
     * const temporada = await prisma.temporada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemporadaFindFirstOrThrowArgs>(args?: SelectSubset<T, TemporadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemporadaClient<$Result.GetResult<Prisma.$TemporadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Temporadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Temporadas
     * const temporadas = await prisma.temporada.findMany()
     * 
     * // Get first 10 Temporadas
     * const temporadas = await prisma.temporada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const temporadaWithIdOnly = await prisma.temporada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemporadaFindManyArgs>(args?: SelectSubset<T, TemporadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Temporada.
     * @param {TemporadaCreateArgs} args - Arguments to create a Temporada.
     * @example
     * // Create one Temporada
     * const Temporada = await prisma.temporada.create({
     *   data: {
     *     // ... data to create a Temporada
     *   }
     * })
     * 
     */
    create<T extends TemporadaCreateArgs>(args: SelectSubset<T, TemporadaCreateArgs<ExtArgs>>): Prisma__TemporadaClient<$Result.GetResult<Prisma.$TemporadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Temporadas.
     * @param {TemporadaCreateManyArgs} args - Arguments to create many Temporadas.
     * @example
     * // Create many Temporadas
     * const temporada = await prisma.temporada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemporadaCreateManyArgs>(args?: SelectSubset<T, TemporadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Temporadas and returns the data saved in the database.
     * @param {TemporadaCreateManyAndReturnArgs} args - Arguments to create many Temporadas.
     * @example
     * // Create many Temporadas
     * const temporada = await prisma.temporada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Temporadas and only return the `id`
     * const temporadaWithIdOnly = await prisma.temporada.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemporadaCreateManyAndReturnArgs>(args?: SelectSubset<T, TemporadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Temporada.
     * @param {TemporadaDeleteArgs} args - Arguments to delete one Temporada.
     * @example
     * // Delete one Temporada
     * const Temporada = await prisma.temporada.delete({
     *   where: {
     *     // ... filter to delete one Temporada
     *   }
     * })
     * 
     */
    delete<T extends TemporadaDeleteArgs>(args: SelectSubset<T, TemporadaDeleteArgs<ExtArgs>>): Prisma__TemporadaClient<$Result.GetResult<Prisma.$TemporadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Temporada.
     * @param {TemporadaUpdateArgs} args - Arguments to update one Temporada.
     * @example
     * // Update one Temporada
     * const temporada = await prisma.temporada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemporadaUpdateArgs>(args: SelectSubset<T, TemporadaUpdateArgs<ExtArgs>>): Prisma__TemporadaClient<$Result.GetResult<Prisma.$TemporadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Temporadas.
     * @param {TemporadaDeleteManyArgs} args - Arguments to filter Temporadas to delete.
     * @example
     * // Delete a few Temporadas
     * const { count } = await prisma.temporada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemporadaDeleteManyArgs>(args?: SelectSubset<T, TemporadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Temporadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Temporadas
     * const temporada = await prisma.temporada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemporadaUpdateManyArgs>(args: SelectSubset<T, TemporadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Temporadas and returns the data updated in the database.
     * @param {TemporadaUpdateManyAndReturnArgs} args - Arguments to update many Temporadas.
     * @example
     * // Update many Temporadas
     * const temporada = await prisma.temporada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Temporadas and only return the `id`
     * const temporadaWithIdOnly = await prisma.temporada.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemporadaUpdateManyAndReturnArgs>(args: SelectSubset<T, TemporadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Temporada.
     * @param {TemporadaUpsertArgs} args - Arguments to update or create a Temporada.
     * @example
     * // Update or create a Temporada
     * const temporada = await prisma.temporada.upsert({
     *   create: {
     *     // ... data to create a Temporada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Temporada we want to update
     *   }
     * })
     */
    upsert<T extends TemporadaUpsertArgs>(args: SelectSubset<T, TemporadaUpsertArgs<ExtArgs>>): Prisma__TemporadaClient<$Result.GetResult<Prisma.$TemporadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Temporadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporadaCountArgs} args - Arguments to filter Temporadas to count.
     * @example
     * // Count the number of Temporadas
     * const count = await prisma.temporada.count({
     *   where: {
     *     // ... the filter for the Temporadas we want to count
     *   }
     * })
    **/
    count<T extends TemporadaCountArgs>(
      args?: Subset<T, TemporadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemporadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Temporada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemporadaAggregateArgs>(args: Subset<T, TemporadaAggregateArgs>): Prisma.PrismaPromise<GetTemporadaAggregateType<T>>

    /**
     * Group by Temporada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporadaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemporadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemporadaGroupByArgs['orderBy'] }
        : { orderBy?: TemporadaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemporadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemporadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Temporada model
   */
  readonly fields: TemporadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Temporada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemporadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actuacions<T extends Temporada$actuacionsArgs<ExtArgs> = {}>(args?: Subset<T, Temporada$actuacionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActuacioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Temporada model
   */
  interface TemporadaFieldRefs {
    readonly id: FieldRef<"Temporada", 'Int'>
    readonly year: FieldRef<"Temporada", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Temporada findUnique
   */
  export type TemporadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temporada
     */
    select?: TemporadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temporada
     */
    omit?: TemporadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporadaInclude<ExtArgs> | null
    /**
     * Filter, which Temporada to fetch.
     */
    where: TemporadaWhereUniqueInput
  }

  /**
   * Temporada findUniqueOrThrow
   */
  export type TemporadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temporada
     */
    select?: TemporadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temporada
     */
    omit?: TemporadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporadaInclude<ExtArgs> | null
    /**
     * Filter, which Temporada to fetch.
     */
    where: TemporadaWhereUniqueInput
  }

  /**
   * Temporada findFirst
   */
  export type TemporadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temporada
     */
    select?: TemporadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temporada
     */
    omit?: TemporadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporadaInclude<ExtArgs> | null
    /**
     * Filter, which Temporada to fetch.
     */
    where?: TemporadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Temporadas to fetch.
     */
    orderBy?: TemporadaOrderByWithRelationInput | TemporadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Temporadas.
     */
    cursor?: TemporadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Temporadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Temporadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Temporadas.
     */
    distinct?: TemporadaScalarFieldEnum | TemporadaScalarFieldEnum[]
  }

  /**
   * Temporada findFirstOrThrow
   */
  export type TemporadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temporada
     */
    select?: TemporadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temporada
     */
    omit?: TemporadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporadaInclude<ExtArgs> | null
    /**
     * Filter, which Temporada to fetch.
     */
    where?: TemporadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Temporadas to fetch.
     */
    orderBy?: TemporadaOrderByWithRelationInput | TemporadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Temporadas.
     */
    cursor?: TemporadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Temporadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Temporadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Temporadas.
     */
    distinct?: TemporadaScalarFieldEnum | TemporadaScalarFieldEnum[]
  }

  /**
   * Temporada findMany
   */
  export type TemporadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temporada
     */
    select?: TemporadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temporada
     */
    omit?: TemporadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporadaInclude<ExtArgs> | null
    /**
     * Filter, which Temporadas to fetch.
     */
    where?: TemporadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Temporadas to fetch.
     */
    orderBy?: TemporadaOrderByWithRelationInput | TemporadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Temporadas.
     */
    cursor?: TemporadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Temporadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Temporadas.
     */
    skip?: number
    distinct?: TemporadaScalarFieldEnum | TemporadaScalarFieldEnum[]
  }

  /**
   * Temporada create
   */
  export type TemporadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temporada
     */
    select?: TemporadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temporada
     */
    omit?: TemporadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporadaInclude<ExtArgs> | null
    /**
     * The data needed to create a Temporada.
     */
    data: XOR<TemporadaCreateInput, TemporadaUncheckedCreateInput>
  }

  /**
   * Temporada createMany
   */
  export type TemporadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Temporadas.
     */
    data: TemporadaCreateManyInput | TemporadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Temporada createManyAndReturn
   */
  export type TemporadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temporada
     */
    select?: TemporadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Temporada
     */
    omit?: TemporadaOmit<ExtArgs> | null
    /**
     * The data used to create many Temporadas.
     */
    data: TemporadaCreateManyInput | TemporadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Temporada update
   */
  export type TemporadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temporada
     */
    select?: TemporadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temporada
     */
    omit?: TemporadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporadaInclude<ExtArgs> | null
    /**
     * The data needed to update a Temporada.
     */
    data: XOR<TemporadaUpdateInput, TemporadaUncheckedUpdateInput>
    /**
     * Choose, which Temporada to update.
     */
    where: TemporadaWhereUniqueInput
  }

  /**
   * Temporada updateMany
   */
  export type TemporadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Temporadas.
     */
    data: XOR<TemporadaUpdateManyMutationInput, TemporadaUncheckedUpdateManyInput>
    /**
     * Filter which Temporadas to update
     */
    where?: TemporadaWhereInput
    /**
     * Limit how many Temporadas to update.
     */
    limit?: number
  }

  /**
   * Temporada updateManyAndReturn
   */
  export type TemporadaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temporada
     */
    select?: TemporadaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Temporada
     */
    omit?: TemporadaOmit<ExtArgs> | null
    /**
     * The data used to update Temporadas.
     */
    data: XOR<TemporadaUpdateManyMutationInput, TemporadaUncheckedUpdateManyInput>
    /**
     * Filter which Temporadas to update
     */
    where?: TemporadaWhereInput
    /**
     * Limit how many Temporadas to update.
     */
    limit?: number
  }

  /**
   * Temporada upsert
   */
  export type TemporadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temporada
     */
    select?: TemporadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temporada
     */
    omit?: TemporadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporadaInclude<ExtArgs> | null
    /**
     * The filter to search for the Temporada to update in case it exists.
     */
    where: TemporadaWhereUniqueInput
    /**
     * In case the Temporada found by the `where` argument doesn't exist, create a new Temporada with this data.
     */
    create: XOR<TemporadaCreateInput, TemporadaUncheckedCreateInput>
    /**
     * In case the Temporada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemporadaUpdateInput, TemporadaUncheckedUpdateInput>
  }

  /**
   * Temporada delete
   */
  export type TemporadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temporada
     */
    select?: TemporadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temporada
     */
    omit?: TemporadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporadaInclude<ExtArgs> | null
    /**
     * Filter which Temporada to delete.
     */
    where: TemporadaWhereUniqueInput
  }

  /**
   * Temporada deleteMany
   */
  export type TemporadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Temporadas to delete
     */
    where?: TemporadaWhereInput
    /**
     * Limit how many Temporadas to delete.
     */
    limit?: number
  }

  /**
   * Temporada.actuacions
   */
  export type Temporada$actuacionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuacio
     */
    select?: ActuacioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuacio
     */
    omit?: ActuacioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuacioInclude<ExtArgs> | null
    where?: ActuacioWhereInput
    orderBy?: ActuacioOrderByWithRelationInput | ActuacioOrderByWithRelationInput[]
    cursor?: ActuacioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActuacioScalarFieldEnum | ActuacioScalarFieldEnum[]
  }

  /**
   * Temporada without action
   */
  export type TemporadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temporada
     */
    select?: TemporadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temporada
     */
    omit?: TemporadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporadaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ActuacioScalarFieldEnum: {
    id: 'id',
    data: 'data',
    dataHora: 'dataHora',
    lloc: 'lloc',
    ciutat: 'ciutat',
    nom: 'nom',
    temporadaId: 'temporadaId',
    cronicaId: 'cronicaId'
  };

  export type ActuacioScalarFieldEnum = (typeof ActuacioScalarFieldEnum)[keyof typeof ActuacioScalarFieldEnum]


  export const CronicaScalarFieldEnum: {
    id: 'id',
    created: 'created',
    Titol: 'Titol',
    Text: 'Text',
    autorId: 'autorId',
    actuacioId: 'actuacioId'
  };

  export type CronicaScalarFieldEnum = (typeof CronicaScalarFieldEnum)[keyof typeof CronicaScalarFieldEnum]


  export const CastellScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    actuacioId: 'actuacioId',
    resultat: 'resultat'
  };

  export type CastellScalarFieldEnum = (typeof CastellScalarFieldEnum)[keyof typeof CastellScalarFieldEnum]


  export const UsuariScalarFieldEnum: {
    id: 'id',
    correu: 'correu',
    contrassenya: 'contrassenya',
    nom: 'nom'
  };

  export type UsuariScalarFieldEnum = (typeof UsuariScalarFieldEnum)[keyof typeof UsuariScalarFieldEnum]


  export const FotoScalarFieldEnum: {
    id: 'id',
    created: 'created',
    name: 'name',
    url: 'url',
    autorId: 'autorId',
    mainFoto: 'mainFoto',
    actuacioId: 'actuacioId',
    castellId: 'castellId'
  };

  export type FotoScalarFieldEnum = (typeof FotoScalarFieldEnum)[keyof typeof FotoScalarFieldEnum]


  export const TemporadaScalarFieldEnum: {
    id: 'id',
    year: 'year'
  };

  export type TemporadaScalarFieldEnum = (typeof TemporadaScalarFieldEnum)[keyof typeof TemporadaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ActuacioWhereInput = {
    AND?: ActuacioWhereInput | ActuacioWhereInput[]
    OR?: ActuacioWhereInput[]
    NOT?: ActuacioWhereInput | ActuacioWhereInput[]
    id?: IntFilter<"Actuacio"> | number
    data?: DateTimeFilter<"Actuacio"> | Date | string
    dataHora?: DateTimeNullableFilter<"Actuacio"> | Date | string | null
    lloc?: StringNullableFilter<"Actuacio"> | string | null
    ciutat?: StringFilter<"Actuacio"> | string
    nom?: StringFilter<"Actuacio"> | string
    temporadaId?: IntFilter<"Actuacio"> | number
    cronicaId?: IntNullableFilter<"Actuacio"> | number | null
    castells?: CastellListRelationFilter
    fotos?: FotoListRelationFilter
    temporada?: XOR<TemporadaScalarRelationFilter, TemporadaWhereInput>
    cronica?: XOR<CronicaNullableScalarRelationFilter, CronicaWhereInput> | null
  }

  export type ActuacioOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    dataHora?: SortOrderInput | SortOrder
    lloc?: SortOrderInput | SortOrder
    ciutat?: SortOrder
    nom?: SortOrder
    temporadaId?: SortOrder
    cronicaId?: SortOrderInput | SortOrder
    castells?: CastellOrderByRelationAggregateInput
    fotos?: FotoOrderByRelationAggregateInput
    temporada?: TemporadaOrderByWithRelationInput
    cronica?: CronicaOrderByWithRelationInput
  }

  export type ActuacioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActuacioWhereInput | ActuacioWhereInput[]
    OR?: ActuacioWhereInput[]
    NOT?: ActuacioWhereInput | ActuacioWhereInput[]
    data?: DateTimeFilter<"Actuacio"> | Date | string
    dataHora?: DateTimeNullableFilter<"Actuacio"> | Date | string | null
    lloc?: StringNullableFilter<"Actuacio"> | string | null
    ciutat?: StringFilter<"Actuacio"> | string
    nom?: StringFilter<"Actuacio"> | string
    temporadaId?: IntFilter<"Actuacio"> | number
    cronicaId?: IntNullableFilter<"Actuacio"> | number | null
    castells?: CastellListRelationFilter
    fotos?: FotoListRelationFilter
    temporada?: XOR<TemporadaScalarRelationFilter, TemporadaWhereInput>
    cronica?: XOR<CronicaNullableScalarRelationFilter, CronicaWhereInput> | null
  }, "id">

  export type ActuacioOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    dataHora?: SortOrderInput | SortOrder
    lloc?: SortOrderInput | SortOrder
    ciutat?: SortOrder
    nom?: SortOrder
    temporadaId?: SortOrder
    cronicaId?: SortOrderInput | SortOrder
    _count?: ActuacioCountOrderByAggregateInput
    _avg?: ActuacioAvgOrderByAggregateInput
    _max?: ActuacioMaxOrderByAggregateInput
    _min?: ActuacioMinOrderByAggregateInput
    _sum?: ActuacioSumOrderByAggregateInput
  }

  export type ActuacioScalarWhereWithAggregatesInput = {
    AND?: ActuacioScalarWhereWithAggregatesInput | ActuacioScalarWhereWithAggregatesInput[]
    OR?: ActuacioScalarWhereWithAggregatesInput[]
    NOT?: ActuacioScalarWhereWithAggregatesInput | ActuacioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Actuacio"> | number
    data?: DateTimeWithAggregatesFilter<"Actuacio"> | Date | string
    dataHora?: DateTimeNullableWithAggregatesFilter<"Actuacio"> | Date | string | null
    lloc?: StringNullableWithAggregatesFilter<"Actuacio"> | string | null
    ciutat?: StringWithAggregatesFilter<"Actuacio"> | string
    nom?: StringWithAggregatesFilter<"Actuacio"> | string
    temporadaId?: IntWithAggregatesFilter<"Actuacio"> | number
    cronicaId?: IntNullableWithAggregatesFilter<"Actuacio"> | number | null
  }

  export type CronicaWhereInput = {
    AND?: CronicaWhereInput | CronicaWhereInput[]
    OR?: CronicaWhereInput[]
    NOT?: CronicaWhereInput | CronicaWhereInput[]
    id?: IntFilter<"Cronica"> | number
    created?: DateTimeFilter<"Cronica"> | Date | string
    Titol?: StringFilter<"Cronica"> | string
    Text?: StringFilter<"Cronica"> | string
    autorId?: IntFilter<"Cronica"> | number
    actuacioId?: IntFilter<"Cronica"> | number
    autor?: XOR<UsuariScalarRelationFilter, UsuariWhereInput>
    actuacio?: XOR<ActuacioScalarRelationFilter, ActuacioWhereInput>
  }

  export type CronicaOrderByWithRelationInput = {
    id?: SortOrder
    created?: SortOrder
    Titol?: SortOrder
    Text?: SortOrder
    autorId?: SortOrder
    actuacioId?: SortOrder
    autor?: UsuariOrderByWithRelationInput
    actuacio?: ActuacioOrderByWithRelationInput
  }

  export type CronicaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    actuacioId?: number
    AND?: CronicaWhereInput | CronicaWhereInput[]
    OR?: CronicaWhereInput[]
    NOT?: CronicaWhereInput | CronicaWhereInput[]
    created?: DateTimeFilter<"Cronica"> | Date | string
    Titol?: StringFilter<"Cronica"> | string
    Text?: StringFilter<"Cronica"> | string
    autorId?: IntFilter<"Cronica"> | number
    autor?: XOR<UsuariScalarRelationFilter, UsuariWhereInput>
    actuacio?: XOR<ActuacioScalarRelationFilter, ActuacioWhereInput>
  }, "id" | "actuacioId">

  export type CronicaOrderByWithAggregationInput = {
    id?: SortOrder
    created?: SortOrder
    Titol?: SortOrder
    Text?: SortOrder
    autorId?: SortOrder
    actuacioId?: SortOrder
    _count?: CronicaCountOrderByAggregateInput
    _avg?: CronicaAvgOrderByAggregateInput
    _max?: CronicaMaxOrderByAggregateInput
    _min?: CronicaMinOrderByAggregateInput
    _sum?: CronicaSumOrderByAggregateInput
  }

  export type CronicaScalarWhereWithAggregatesInput = {
    AND?: CronicaScalarWhereWithAggregatesInput | CronicaScalarWhereWithAggregatesInput[]
    OR?: CronicaScalarWhereWithAggregatesInput[]
    NOT?: CronicaScalarWhereWithAggregatesInput | CronicaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cronica"> | number
    created?: DateTimeWithAggregatesFilter<"Cronica"> | Date | string
    Titol?: StringWithAggregatesFilter<"Cronica"> | string
    Text?: StringWithAggregatesFilter<"Cronica"> | string
    autorId?: IntWithAggregatesFilter<"Cronica"> | number
    actuacioId?: IntWithAggregatesFilter<"Cronica"> | number
  }

  export type CastellWhereInput = {
    AND?: CastellWhereInput | CastellWhereInput[]
    OR?: CastellWhereInput[]
    NOT?: CastellWhereInput | CastellWhereInput[]
    id?: IntFilter<"Castell"> | number
    nom?: StringFilter<"Castell"> | string
    actuacioId?: IntFilter<"Castell"> | number
    resultat?: StringFilter<"Castell"> | string
    actuacio?: XOR<ActuacioScalarRelationFilter, ActuacioWhereInput>
    fotos?: FotoListRelationFilter
  }

  export type CastellOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    actuacioId?: SortOrder
    resultat?: SortOrder
    actuacio?: ActuacioOrderByWithRelationInput
    fotos?: FotoOrderByRelationAggregateInput
  }

  export type CastellWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CastellWhereInput | CastellWhereInput[]
    OR?: CastellWhereInput[]
    NOT?: CastellWhereInput | CastellWhereInput[]
    nom?: StringFilter<"Castell"> | string
    actuacioId?: IntFilter<"Castell"> | number
    resultat?: StringFilter<"Castell"> | string
    actuacio?: XOR<ActuacioScalarRelationFilter, ActuacioWhereInput>
    fotos?: FotoListRelationFilter
  }, "id">

  export type CastellOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    actuacioId?: SortOrder
    resultat?: SortOrder
    _count?: CastellCountOrderByAggregateInput
    _avg?: CastellAvgOrderByAggregateInput
    _max?: CastellMaxOrderByAggregateInput
    _min?: CastellMinOrderByAggregateInput
    _sum?: CastellSumOrderByAggregateInput
  }

  export type CastellScalarWhereWithAggregatesInput = {
    AND?: CastellScalarWhereWithAggregatesInput | CastellScalarWhereWithAggregatesInput[]
    OR?: CastellScalarWhereWithAggregatesInput[]
    NOT?: CastellScalarWhereWithAggregatesInput | CastellScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Castell"> | number
    nom?: StringWithAggregatesFilter<"Castell"> | string
    actuacioId?: IntWithAggregatesFilter<"Castell"> | number
    resultat?: StringWithAggregatesFilter<"Castell"> | string
  }

  export type UsuariWhereInput = {
    AND?: UsuariWhereInput | UsuariWhereInput[]
    OR?: UsuariWhereInput[]
    NOT?: UsuariWhereInput | UsuariWhereInput[]
    id?: IntFilter<"Usuari"> | number
    correu?: StringFilter<"Usuari"> | string
    contrassenya?: StringFilter<"Usuari"> | string
    nom?: StringFilter<"Usuari"> | string
    fotos?: FotoListRelationFilter
    croniques?: CronicaListRelationFilter
  }

  export type UsuariOrderByWithRelationInput = {
    id?: SortOrder
    correu?: SortOrder
    contrassenya?: SortOrder
    nom?: SortOrder
    fotos?: FotoOrderByRelationAggregateInput
    croniques?: CronicaOrderByRelationAggregateInput
  }

  export type UsuariWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correu?: string
    AND?: UsuariWhereInput | UsuariWhereInput[]
    OR?: UsuariWhereInput[]
    NOT?: UsuariWhereInput | UsuariWhereInput[]
    contrassenya?: StringFilter<"Usuari"> | string
    nom?: StringFilter<"Usuari"> | string
    fotos?: FotoListRelationFilter
    croniques?: CronicaListRelationFilter
  }, "id" | "correu">

  export type UsuariOrderByWithAggregationInput = {
    id?: SortOrder
    correu?: SortOrder
    contrassenya?: SortOrder
    nom?: SortOrder
    _count?: UsuariCountOrderByAggregateInput
    _avg?: UsuariAvgOrderByAggregateInput
    _max?: UsuariMaxOrderByAggregateInput
    _min?: UsuariMinOrderByAggregateInput
    _sum?: UsuariSumOrderByAggregateInput
  }

  export type UsuariScalarWhereWithAggregatesInput = {
    AND?: UsuariScalarWhereWithAggregatesInput | UsuariScalarWhereWithAggregatesInput[]
    OR?: UsuariScalarWhereWithAggregatesInput[]
    NOT?: UsuariScalarWhereWithAggregatesInput | UsuariScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuari"> | number
    correu?: StringWithAggregatesFilter<"Usuari"> | string
    contrassenya?: StringWithAggregatesFilter<"Usuari"> | string
    nom?: StringWithAggregatesFilter<"Usuari"> | string
  }

  export type FotoWhereInput = {
    AND?: FotoWhereInput | FotoWhereInput[]
    OR?: FotoWhereInput[]
    NOT?: FotoWhereInput | FotoWhereInput[]
    id?: IntFilter<"Foto"> | number
    created?: DateTimeFilter<"Foto"> | Date | string
    name?: StringFilter<"Foto"> | string
    url?: StringNullableFilter<"Foto"> | string | null
    autorId?: IntFilter<"Foto"> | number
    mainFoto?: BoolFilter<"Foto"> | boolean
    actuacioId?: IntFilter<"Foto"> | number
    castellId?: IntFilter<"Foto"> | number
    autor?: XOR<UsuariScalarRelationFilter, UsuariWhereInput>
    actuacio?: XOR<ActuacioScalarRelationFilter, ActuacioWhereInput>
    castell?: XOR<CastellNullableScalarRelationFilter, CastellWhereInput> | null
  }

  export type FotoOrderByWithRelationInput = {
    id?: SortOrder
    created?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    autorId?: SortOrder
    mainFoto?: SortOrder
    actuacioId?: SortOrder
    castellId?: SortOrder
    autor?: UsuariOrderByWithRelationInput
    actuacio?: ActuacioOrderByWithRelationInput
    castell?: CastellOrderByWithRelationInput
  }

  export type FotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FotoWhereInput | FotoWhereInput[]
    OR?: FotoWhereInput[]
    NOT?: FotoWhereInput | FotoWhereInput[]
    created?: DateTimeFilter<"Foto"> | Date | string
    name?: StringFilter<"Foto"> | string
    url?: StringNullableFilter<"Foto"> | string | null
    autorId?: IntFilter<"Foto"> | number
    mainFoto?: BoolFilter<"Foto"> | boolean
    actuacioId?: IntFilter<"Foto"> | number
    castellId?: IntFilter<"Foto"> | number
    autor?: XOR<UsuariScalarRelationFilter, UsuariWhereInput>
    actuacio?: XOR<ActuacioScalarRelationFilter, ActuacioWhereInput>
    castell?: XOR<CastellNullableScalarRelationFilter, CastellWhereInput> | null
  }, "id">

  export type FotoOrderByWithAggregationInput = {
    id?: SortOrder
    created?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    autorId?: SortOrder
    mainFoto?: SortOrder
    actuacioId?: SortOrder
    castellId?: SortOrder
    _count?: FotoCountOrderByAggregateInput
    _avg?: FotoAvgOrderByAggregateInput
    _max?: FotoMaxOrderByAggregateInput
    _min?: FotoMinOrderByAggregateInput
    _sum?: FotoSumOrderByAggregateInput
  }

  export type FotoScalarWhereWithAggregatesInput = {
    AND?: FotoScalarWhereWithAggregatesInput | FotoScalarWhereWithAggregatesInput[]
    OR?: FotoScalarWhereWithAggregatesInput[]
    NOT?: FotoScalarWhereWithAggregatesInput | FotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Foto"> | number
    created?: DateTimeWithAggregatesFilter<"Foto"> | Date | string
    name?: StringWithAggregatesFilter<"Foto"> | string
    url?: StringNullableWithAggregatesFilter<"Foto"> | string | null
    autorId?: IntWithAggregatesFilter<"Foto"> | number
    mainFoto?: BoolWithAggregatesFilter<"Foto"> | boolean
    actuacioId?: IntWithAggregatesFilter<"Foto"> | number
    castellId?: IntWithAggregatesFilter<"Foto"> | number
  }

  export type TemporadaWhereInput = {
    AND?: TemporadaWhereInput | TemporadaWhereInput[]
    OR?: TemporadaWhereInput[]
    NOT?: TemporadaWhereInput | TemporadaWhereInput[]
    id?: IntFilter<"Temporada"> | number
    year?: IntFilter<"Temporada"> | number
    actuacions?: ActuacioListRelationFilter
  }

  export type TemporadaOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    actuacions?: ActuacioOrderByRelationAggregateInput
  }

  export type TemporadaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    year?: number
    AND?: TemporadaWhereInput | TemporadaWhereInput[]
    OR?: TemporadaWhereInput[]
    NOT?: TemporadaWhereInput | TemporadaWhereInput[]
    actuacions?: ActuacioListRelationFilter
  }, "id" | "year">

  export type TemporadaOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    _count?: TemporadaCountOrderByAggregateInput
    _avg?: TemporadaAvgOrderByAggregateInput
    _max?: TemporadaMaxOrderByAggregateInput
    _min?: TemporadaMinOrderByAggregateInput
    _sum?: TemporadaSumOrderByAggregateInput
  }

  export type TemporadaScalarWhereWithAggregatesInput = {
    AND?: TemporadaScalarWhereWithAggregatesInput | TemporadaScalarWhereWithAggregatesInput[]
    OR?: TemporadaScalarWhereWithAggregatesInput[]
    NOT?: TemporadaScalarWhereWithAggregatesInput | TemporadaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Temporada"> | number
    year?: IntWithAggregatesFilter<"Temporada"> | number
  }

  export type ActuacioCreateInput = {
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
    nom: string
    cronicaId?: number | null
    castells?: CastellCreateNestedManyWithoutActuacioInput
    fotos?: FotoCreateNestedManyWithoutActuacioInput
    temporada: TemporadaCreateNestedOneWithoutActuacionsInput
    cronica?: CronicaCreateNestedOneWithoutActuacioInput
  }

  export type ActuacioUncheckedCreateInput = {
    id?: number
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
    nom: string
    temporadaId: number
    cronicaId?: number | null
    castells?: CastellUncheckedCreateNestedManyWithoutActuacioInput
    fotos?: FotoUncheckedCreateNestedManyWithoutActuacioInput
    cronica?: CronicaUncheckedCreateNestedOneWithoutActuacioInput
  }

  export type ActuacioUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    cronicaId?: NullableIntFieldUpdateOperationsInput | number | null
    castells?: CastellUpdateManyWithoutActuacioNestedInput
    fotos?: FotoUpdateManyWithoutActuacioNestedInput
    temporada?: TemporadaUpdateOneRequiredWithoutActuacionsNestedInput
    cronica?: CronicaUpdateOneWithoutActuacioNestedInput
  }

  export type ActuacioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    temporadaId?: IntFieldUpdateOperationsInput | number
    cronicaId?: NullableIntFieldUpdateOperationsInput | number | null
    castells?: CastellUncheckedUpdateManyWithoutActuacioNestedInput
    fotos?: FotoUncheckedUpdateManyWithoutActuacioNestedInput
    cronica?: CronicaUncheckedUpdateOneWithoutActuacioNestedInput
  }

  export type ActuacioCreateManyInput = {
    id?: number
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
    nom: string
    temporadaId: number
    cronicaId?: number | null
  }

  export type ActuacioUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    cronicaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActuacioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    temporadaId?: IntFieldUpdateOperationsInput | number
    cronicaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CronicaCreateInput = {
    created?: Date | string
    Titol: string
    Text: string
    autor: UsuariCreateNestedOneWithoutCroniquesInput
    actuacio: ActuacioCreateNestedOneWithoutCronicaInput
  }

  export type CronicaUncheckedCreateInput = {
    id?: number
    created?: Date | string
    Titol: string
    Text: string
    autorId: number
    actuacioId: number
  }

  export type CronicaUpdateInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    Titol?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    autor?: UsuariUpdateOneRequiredWithoutCroniquesNestedInput
    actuacio?: ActuacioUpdateOneRequiredWithoutCronicaNestedInput
  }

  export type CronicaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    Titol?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    autorId?: IntFieldUpdateOperationsInput | number
    actuacioId?: IntFieldUpdateOperationsInput | number
  }

  export type CronicaCreateManyInput = {
    id?: number
    created?: Date | string
    Titol: string
    Text: string
    autorId: number
    actuacioId: number
  }

  export type CronicaUpdateManyMutationInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    Titol?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
  }

  export type CronicaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    Titol?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    autorId?: IntFieldUpdateOperationsInput | number
    actuacioId?: IntFieldUpdateOperationsInput | number
  }

  export type CastellCreateInput = {
    nom: string
    resultat: string
    actuacio: ActuacioCreateNestedOneWithoutCastellsInput
    fotos?: FotoCreateNestedManyWithoutCastellInput
  }

  export type CastellUncheckedCreateInput = {
    id?: number
    nom: string
    actuacioId: number
    resultat: string
    fotos?: FotoUncheckedCreateNestedManyWithoutCastellInput
  }

  export type CastellUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    resultat?: StringFieldUpdateOperationsInput | string
    actuacio?: ActuacioUpdateOneRequiredWithoutCastellsNestedInput
    fotos?: FotoUpdateManyWithoutCastellNestedInput
  }

  export type CastellUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    actuacioId?: IntFieldUpdateOperationsInput | number
    resultat?: StringFieldUpdateOperationsInput | string
    fotos?: FotoUncheckedUpdateManyWithoutCastellNestedInput
  }

  export type CastellCreateManyInput = {
    id?: number
    nom: string
    actuacioId: number
    resultat: string
  }

  export type CastellUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    resultat?: StringFieldUpdateOperationsInput | string
  }

  export type CastellUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    actuacioId?: IntFieldUpdateOperationsInput | number
    resultat?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariCreateInput = {
    correu: string
    contrassenya: string
    nom: string
    fotos?: FotoCreateNestedManyWithoutAutorInput
    croniques?: CronicaCreateNestedManyWithoutAutorInput
  }

  export type UsuariUncheckedCreateInput = {
    id?: number
    correu: string
    contrassenya: string
    nom: string
    fotos?: FotoUncheckedCreateNestedManyWithoutAutorInput
    croniques?: CronicaUncheckedCreateNestedManyWithoutAutorInput
  }

  export type UsuariUpdateInput = {
    correu?: StringFieldUpdateOperationsInput | string
    contrassenya?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    fotos?: FotoUpdateManyWithoutAutorNestedInput
    croniques?: CronicaUpdateManyWithoutAutorNestedInput
  }

  export type UsuariUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    correu?: StringFieldUpdateOperationsInput | string
    contrassenya?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    fotos?: FotoUncheckedUpdateManyWithoutAutorNestedInput
    croniques?: CronicaUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type UsuariCreateManyInput = {
    id?: number
    correu: string
    contrassenya: string
    nom: string
  }

  export type UsuariUpdateManyMutationInput = {
    correu?: StringFieldUpdateOperationsInput | string
    contrassenya?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    correu?: StringFieldUpdateOperationsInput | string
    contrassenya?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type FotoCreateInput = {
    created?: Date | string
    name: string
    url?: string | null
    mainFoto?: boolean
    autor: UsuariCreateNestedOneWithoutFotosInput
    actuacio: ActuacioCreateNestedOneWithoutFotosInput
    castell?: CastellCreateNestedOneWithoutFotosInput
  }

  export type FotoUncheckedCreateInput = {
    id?: number
    created?: Date | string
    name: string
    url?: string | null
    autorId: number
    mainFoto?: boolean
    actuacioId: number
    castellId: number
  }

  export type FotoUpdateInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    mainFoto?: BoolFieldUpdateOperationsInput | boolean
    autor?: UsuariUpdateOneRequiredWithoutFotosNestedInput
    actuacio?: ActuacioUpdateOneRequiredWithoutFotosNestedInput
    castell?: CastellUpdateOneWithoutFotosNestedInput
  }

  export type FotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
    mainFoto?: BoolFieldUpdateOperationsInput | boolean
    actuacioId?: IntFieldUpdateOperationsInput | number
    castellId?: IntFieldUpdateOperationsInput | number
  }

  export type FotoCreateManyInput = {
    id?: number
    created?: Date | string
    name: string
    url?: string | null
    autorId: number
    mainFoto?: boolean
    actuacioId: number
    castellId: number
  }

  export type FotoUpdateManyMutationInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    mainFoto?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
    mainFoto?: BoolFieldUpdateOperationsInput | boolean
    actuacioId?: IntFieldUpdateOperationsInput | number
    castellId?: IntFieldUpdateOperationsInput | number
  }

  export type TemporadaCreateInput = {
    year: number
    actuacions?: ActuacioCreateNestedManyWithoutTemporadaInput
  }

  export type TemporadaUncheckedCreateInput = {
    id?: number
    year: number
    actuacions?: ActuacioUncheckedCreateNestedManyWithoutTemporadaInput
  }

  export type TemporadaUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    actuacions?: ActuacioUpdateManyWithoutTemporadaNestedInput
  }

  export type TemporadaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    actuacions?: ActuacioUncheckedUpdateManyWithoutTemporadaNestedInput
  }

  export type TemporadaCreateManyInput = {
    id?: number
    year: number
  }

  export type TemporadaUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
  }

  export type TemporadaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CastellListRelationFilter = {
    every?: CastellWhereInput
    some?: CastellWhereInput
    none?: CastellWhereInput
  }

  export type FotoListRelationFilter = {
    every?: FotoWhereInput
    some?: FotoWhereInput
    none?: FotoWhereInput
  }

  export type TemporadaScalarRelationFilter = {
    is?: TemporadaWhereInput
    isNot?: TemporadaWhereInput
  }

  export type CronicaNullableScalarRelationFilter = {
    is?: CronicaWhereInput | null
    isNot?: CronicaWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CastellOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActuacioCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    dataHora?: SortOrder
    lloc?: SortOrder
    ciutat?: SortOrder
    nom?: SortOrder
    temporadaId?: SortOrder
    cronicaId?: SortOrder
  }

  export type ActuacioAvgOrderByAggregateInput = {
    id?: SortOrder
    temporadaId?: SortOrder
    cronicaId?: SortOrder
  }

  export type ActuacioMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    dataHora?: SortOrder
    lloc?: SortOrder
    ciutat?: SortOrder
    nom?: SortOrder
    temporadaId?: SortOrder
    cronicaId?: SortOrder
  }

  export type ActuacioMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    dataHora?: SortOrder
    lloc?: SortOrder
    ciutat?: SortOrder
    nom?: SortOrder
    temporadaId?: SortOrder
    cronicaId?: SortOrder
  }

  export type ActuacioSumOrderByAggregateInput = {
    id?: SortOrder
    temporadaId?: SortOrder
    cronicaId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UsuariScalarRelationFilter = {
    is?: UsuariWhereInput
    isNot?: UsuariWhereInput
  }

  export type ActuacioScalarRelationFilter = {
    is?: ActuacioWhereInput
    isNot?: ActuacioWhereInput
  }

  export type CronicaCountOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    Titol?: SortOrder
    Text?: SortOrder
    autorId?: SortOrder
    actuacioId?: SortOrder
  }

  export type CronicaAvgOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    actuacioId?: SortOrder
  }

  export type CronicaMaxOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    Titol?: SortOrder
    Text?: SortOrder
    autorId?: SortOrder
    actuacioId?: SortOrder
  }

  export type CronicaMinOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    Titol?: SortOrder
    Text?: SortOrder
    autorId?: SortOrder
    actuacioId?: SortOrder
  }

  export type CronicaSumOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    actuacioId?: SortOrder
  }

  export type CastellCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    actuacioId?: SortOrder
    resultat?: SortOrder
  }

  export type CastellAvgOrderByAggregateInput = {
    id?: SortOrder
    actuacioId?: SortOrder
  }

  export type CastellMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    actuacioId?: SortOrder
    resultat?: SortOrder
  }

  export type CastellMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    actuacioId?: SortOrder
    resultat?: SortOrder
  }

  export type CastellSumOrderByAggregateInput = {
    id?: SortOrder
    actuacioId?: SortOrder
  }

  export type CronicaListRelationFilter = {
    every?: CronicaWhereInput
    some?: CronicaWhereInput
    none?: CronicaWhereInput
  }

  export type CronicaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuariCountOrderByAggregateInput = {
    id?: SortOrder
    correu?: SortOrder
    contrassenya?: SortOrder
    nom?: SortOrder
  }

  export type UsuariAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuariMaxOrderByAggregateInput = {
    id?: SortOrder
    correu?: SortOrder
    contrassenya?: SortOrder
    nom?: SortOrder
  }

  export type UsuariMinOrderByAggregateInput = {
    id?: SortOrder
    correu?: SortOrder
    contrassenya?: SortOrder
    nom?: SortOrder
  }

  export type UsuariSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CastellNullableScalarRelationFilter = {
    is?: CastellWhereInput | null
    isNot?: CastellWhereInput | null
  }

  export type FotoCountOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    name?: SortOrder
    url?: SortOrder
    autorId?: SortOrder
    mainFoto?: SortOrder
    actuacioId?: SortOrder
    castellId?: SortOrder
  }

  export type FotoAvgOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    actuacioId?: SortOrder
    castellId?: SortOrder
  }

  export type FotoMaxOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    name?: SortOrder
    url?: SortOrder
    autorId?: SortOrder
    mainFoto?: SortOrder
    actuacioId?: SortOrder
    castellId?: SortOrder
  }

  export type FotoMinOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    name?: SortOrder
    url?: SortOrder
    autorId?: SortOrder
    mainFoto?: SortOrder
    actuacioId?: SortOrder
    castellId?: SortOrder
  }

  export type FotoSumOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    actuacioId?: SortOrder
    castellId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ActuacioListRelationFilter = {
    every?: ActuacioWhereInput
    some?: ActuacioWhereInput
    none?: ActuacioWhereInput
  }

  export type ActuacioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemporadaCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type TemporadaAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type TemporadaMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type TemporadaMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type TemporadaSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type CastellCreateNestedManyWithoutActuacioInput = {
    create?: XOR<CastellCreateWithoutActuacioInput, CastellUncheckedCreateWithoutActuacioInput> | CastellCreateWithoutActuacioInput[] | CastellUncheckedCreateWithoutActuacioInput[]
    connectOrCreate?: CastellCreateOrConnectWithoutActuacioInput | CastellCreateOrConnectWithoutActuacioInput[]
    createMany?: CastellCreateManyActuacioInputEnvelope
    connect?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
  }

  export type FotoCreateNestedManyWithoutActuacioInput = {
    create?: XOR<FotoCreateWithoutActuacioInput, FotoUncheckedCreateWithoutActuacioInput> | FotoCreateWithoutActuacioInput[] | FotoUncheckedCreateWithoutActuacioInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutActuacioInput | FotoCreateOrConnectWithoutActuacioInput[]
    createMany?: FotoCreateManyActuacioInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type TemporadaCreateNestedOneWithoutActuacionsInput = {
    create?: XOR<TemporadaCreateWithoutActuacionsInput, TemporadaUncheckedCreateWithoutActuacionsInput>
    connectOrCreate?: TemporadaCreateOrConnectWithoutActuacionsInput
    connect?: TemporadaWhereUniqueInput
  }

  export type CronicaCreateNestedOneWithoutActuacioInput = {
    create?: XOR<CronicaCreateWithoutActuacioInput, CronicaUncheckedCreateWithoutActuacioInput>
    connectOrCreate?: CronicaCreateOrConnectWithoutActuacioInput
    connect?: CronicaWhereUniqueInput
  }

  export type CastellUncheckedCreateNestedManyWithoutActuacioInput = {
    create?: XOR<CastellCreateWithoutActuacioInput, CastellUncheckedCreateWithoutActuacioInput> | CastellCreateWithoutActuacioInput[] | CastellUncheckedCreateWithoutActuacioInput[]
    connectOrCreate?: CastellCreateOrConnectWithoutActuacioInput | CastellCreateOrConnectWithoutActuacioInput[]
    createMany?: CastellCreateManyActuacioInputEnvelope
    connect?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
  }

  export type FotoUncheckedCreateNestedManyWithoutActuacioInput = {
    create?: XOR<FotoCreateWithoutActuacioInput, FotoUncheckedCreateWithoutActuacioInput> | FotoCreateWithoutActuacioInput[] | FotoUncheckedCreateWithoutActuacioInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutActuacioInput | FotoCreateOrConnectWithoutActuacioInput[]
    createMany?: FotoCreateManyActuacioInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type CronicaUncheckedCreateNestedOneWithoutActuacioInput = {
    create?: XOR<CronicaCreateWithoutActuacioInput, CronicaUncheckedCreateWithoutActuacioInput>
    connectOrCreate?: CronicaCreateOrConnectWithoutActuacioInput
    connect?: CronicaWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CastellUpdateManyWithoutActuacioNestedInput = {
    create?: XOR<CastellCreateWithoutActuacioInput, CastellUncheckedCreateWithoutActuacioInput> | CastellCreateWithoutActuacioInput[] | CastellUncheckedCreateWithoutActuacioInput[]
    connectOrCreate?: CastellCreateOrConnectWithoutActuacioInput | CastellCreateOrConnectWithoutActuacioInput[]
    upsert?: CastellUpsertWithWhereUniqueWithoutActuacioInput | CastellUpsertWithWhereUniqueWithoutActuacioInput[]
    createMany?: CastellCreateManyActuacioInputEnvelope
    set?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
    disconnect?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
    delete?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
    connect?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
    update?: CastellUpdateWithWhereUniqueWithoutActuacioInput | CastellUpdateWithWhereUniqueWithoutActuacioInput[]
    updateMany?: CastellUpdateManyWithWhereWithoutActuacioInput | CastellUpdateManyWithWhereWithoutActuacioInput[]
    deleteMany?: CastellScalarWhereInput | CastellScalarWhereInput[]
  }

  export type FotoUpdateManyWithoutActuacioNestedInput = {
    create?: XOR<FotoCreateWithoutActuacioInput, FotoUncheckedCreateWithoutActuacioInput> | FotoCreateWithoutActuacioInput[] | FotoUncheckedCreateWithoutActuacioInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutActuacioInput | FotoCreateOrConnectWithoutActuacioInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutActuacioInput | FotoUpsertWithWhereUniqueWithoutActuacioInput[]
    createMany?: FotoCreateManyActuacioInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutActuacioInput | FotoUpdateWithWhereUniqueWithoutActuacioInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutActuacioInput | FotoUpdateManyWithWhereWithoutActuacioInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type TemporadaUpdateOneRequiredWithoutActuacionsNestedInput = {
    create?: XOR<TemporadaCreateWithoutActuacionsInput, TemporadaUncheckedCreateWithoutActuacionsInput>
    connectOrCreate?: TemporadaCreateOrConnectWithoutActuacionsInput
    upsert?: TemporadaUpsertWithoutActuacionsInput
    connect?: TemporadaWhereUniqueInput
    update?: XOR<XOR<TemporadaUpdateToOneWithWhereWithoutActuacionsInput, TemporadaUpdateWithoutActuacionsInput>, TemporadaUncheckedUpdateWithoutActuacionsInput>
  }

  export type CronicaUpdateOneWithoutActuacioNestedInput = {
    create?: XOR<CronicaCreateWithoutActuacioInput, CronicaUncheckedCreateWithoutActuacioInput>
    connectOrCreate?: CronicaCreateOrConnectWithoutActuacioInput
    upsert?: CronicaUpsertWithoutActuacioInput
    disconnect?: CronicaWhereInput | boolean
    delete?: CronicaWhereInput | boolean
    connect?: CronicaWhereUniqueInput
    update?: XOR<XOR<CronicaUpdateToOneWithWhereWithoutActuacioInput, CronicaUpdateWithoutActuacioInput>, CronicaUncheckedUpdateWithoutActuacioInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CastellUncheckedUpdateManyWithoutActuacioNestedInput = {
    create?: XOR<CastellCreateWithoutActuacioInput, CastellUncheckedCreateWithoutActuacioInput> | CastellCreateWithoutActuacioInput[] | CastellUncheckedCreateWithoutActuacioInput[]
    connectOrCreate?: CastellCreateOrConnectWithoutActuacioInput | CastellCreateOrConnectWithoutActuacioInput[]
    upsert?: CastellUpsertWithWhereUniqueWithoutActuacioInput | CastellUpsertWithWhereUniqueWithoutActuacioInput[]
    createMany?: CastellCreateManyActuacioInputEnvelope
    set?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
    disconnect?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
    delete?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
    connect?: CastellWhereUniqueInput | CastellWhereUniqueInput[]
    update?: CastellUpdateWithWhereUniqueWithoutActuacioInput | CastellUpdateWithWhereUniqueWithoutActuacioInput[]
    updateMany?: CastellUpdateManyWithWhereWithoutActuacioInput | CastellUpdateManyWithWhereWithoutActuacioInput[]
    deleteMany?: CastellScalarWhereInput | CastellScalarWhereInput[]
  }

  export type FotoUncheckedUpdateManyWithoutActuacioNestedInput = {
    create?: XOR<FotoCreateWithoutActuacioInput, FotoUncheckedCreateWithoutActuacioInput> | FotoCreateWithoutActuacioInput[] | FotoUncheckedCreateWithoutActuacioInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutActuacioInput | FotoCreateOrConnectWithoutActuacioInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutActuacioInput | FotoUpsertWithWhereUniqueWithoutActuacioInput[]
    createMany?: FotoCreateManyActuacioInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutActuacioInput | FotoUpdateWithWhereUniqueWithoutActuacioInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutActuacioInput | FotoUpdateManyWithWhereWithoutActuacioInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type CronicaUncheckedUpdateOneWithoutActuacioNestedInput = {
    create?: XOR<CronicaCreateWithoutActuacioInput, CronicaUncheckedCreateWithoutActuacioInput>
    connectOrCreate?: CronicaCreateOrConnectWithoutActuacioInput
    upsert?: CronicaUpsertWithoutActuacioInput
    disconnect?: CronicaWhereInput | boolean
    delete?: CronicaWhereInput | boolean
    connect?: CronicaWhereUniqueInput
    update?: XOR<XOR<CronicaUpdateToOneWithWhereWithoutActuacioInput, CronicaUpdateWithoutActuacioInput>, CronicaUncheckedUpdateWithoutActuacioInput>
  }

  export type UsuariCreateNestedOneWithoutCroniquesInput = {
    create?: XOR<UsuariCreateWithoutCroniquesInput, UsuariUncheckedCreateWithoutCroniquesInput>
    connectOrCreate?: UsuariCreateOrConnectWithoutCroniquesInput
    connect?: UsuariWhereUniqueInput
  }

  export type ActuacioCreateNestedOneWithoutCronicaInput = {
    create?: XOR<ActuacioCreateWithoutCronicaInput, ActuacioUncheckedCreateWithoutCronicaInput>
    connectOrCreate?: ActuacioCreateOrConnectWithoutCronicaInput
    connect?: ActuacioWhereUniqueInput
  }

  export type UsuariUpdateOneRequiredWithoutCroniquesNestedInput = {
    create?: XOR<UsuariCreateWithoutCroniquesInput, UsuariUncheckedCreateWithoutCroniquesInput>
    connectOrCreate?: UsuariCreateOrConnectWithoutCroniquesInput
    upsert?: UsuariUpsertWithoutCroniquesInput
    connect?: UsuariWhereUniqueInput
    update?: XOR<XOR<UsuariUpdateToOneWithWhereWithoutCroniquesInput, UsuariUpdateWithoutCroniquesInput>, UsuariUncheckedUpdateWithoutCroniquesInput>
  }

  export type ActuacioUpdateOneRequiredWithoutCronicaNestedInput = {
    create?: XOR<ActuacioCreateWithoutCronicaInput, ActuacioUncheckedCreateWithoutCronicaInput>
    connectOrCreate?: ActuacioCreateOrConnectWithoutCronicaInput
    upsert?: ActuacioUpsertWithoutCronicaInput
    connect?: ActuacioWhereUniqueInput
    update?: XOR<XOR<ActuacioUpdateToOneWithWhereWithoutCronicaInput, ActuacioUpdateWithoutCronicaInput>, ActuacioUncheckedUpdateWithoutCronicaInput>
  }

  export type ActuacioCreateNestedOneWithoutCastellsInput = {
    create?: XOR<ActuacioCreateWithoutCastellsInput, ActuacioUncheckedCreateWithoutCastellsInput>
    connectOrCreate?: ActuacioCreateOrConnectWithoutCastellsInput
    connect?: ActuacioWhereUniqueInput
  }

  export type FotoCreateNestedManyWithoutCastellInput = {
    create?: XOR<FotoCreateWithoutCastellInput, FotoUncheckedCreateWithoutCastellInput> | FotoCreateWithoutCastellInput[] | FotoUncheckedCreateWithoutCastellInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutCastellInput | FotoCreateOrConnectWithoutCastellInput[]
    createMany?: FotoCreateManyCastellInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type FotoUncheckedCreateNestedManyWithoutCastellInput = {
    create?: XOR<FotoCreateWithoutCastellInput, FotoUncheckedCreateWithoutCastellInput> | FotoCreateWithoutCastellInput[] | FotoUncheckedCreateWithoutCastellInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutCastellInput | FotoCreateOrConnectWithoutCastellInput[]
    createMany?: FotoCreateManyCastellInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type ActuacioUpdateOneRequiredWithoutCastellsNestedInput = {
    create?: XOR<ActuacioCreateWithoutCastellsInput, ActuacioUncheckedCreateWithoutCastellsInput>
    connectOrCreate?: ActuacioCreateOrConnectWithoutCastellsInput
    upsert?: ActuacioUpsertWithoutCastellsInput
    connect?: ActuacioWhereUniqueInput
    update?: XOR<XOR<ActuacioUpdateToOneWithWhereWithoutCastellsInput, ActuacioUpdateWithoutCastellsInput>, ActuacioUncheckedUpdateWithoutCastellsInput>
  }

  export type FotoUpdateManyWithoutCastellNestedInput = {
    create?: XOR<FotoCreateWithoutCastellInput, FotoUncheckedCreateWithoutCastellInput> | FotoCreateWithoutCastellInput[] | FotoUncheckedCreateWithoutCastellInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutCastellInput | FotoCreateOrConnectWithoutCastellInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutCastellInput | FotoUpsertWithWhereUniqueWithoutCastellInput[]
    createMany?: FotoCreateManyCastellInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutCastellInput | FotoUpdateWithWhereUniqueWithoutCastellInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutCastellInput | FotoUpdateManyWithWhereWithoutCastellInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type FotoUncheckedUpdateManyWithoutCastellNestedInput = {
    create?: XOR<FotoCreateWithoutCastellInput, FotoUncheckedCreateWithoutCastellInput> | FotoCreateWithoutCastellInput[] | FotoUncheckedCreateWithoutCastellInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutCastellInput | FotoCreateOrConnectWithoutCastellInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutCastellInput | FotoUpsertWithWhereUniqueWithoutCastellInput[]
    createMany?: FotoCreateManyCastellInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutCastellInput | FotoUpdateWithWhereUniqueWithoutCastellInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutCastellInput | FotoUpdateManyWithWhereWithoutCastellInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type FotoCreateNestedManyWithoutAutorInput = {
    create?: XOR<FotoCreateWithoutAutorInput, FotoUncheckedCreateWithoutAutorInput> | FotoCreateWithoutAutorInput[] | FotoUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutAutorInput | FotoCreateOrConnectWithoutAutorInput[]
    createMany?: FotoCreateManyAutorInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type CronicaCreateNestedManyWithoutAutorInput = {
    create?: XOR<CronicaCreateWithoutAutorInput, CronicaUncheckedCreateWithoutAutorInput> | CronicaCreateWithoutAutorInput[] | CronicaUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: CronicaCreateOrConnectWithoutAutorInput | CronicaCreateOrConnectWithoutAutorInput[]
    createMany?: CronicaCreateManyAutorInputEnvelope
    connect?: CronicaWhereUniqueInput | CronicaWhereUniqueInput[]
  }

  export type FotoUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<FotoCreateWithoutAutorInput, FotoUncheckedCreateWithoutAutorInput> | FotoCreateWithoutAutorInput[] | FotoUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutAutorInput | FotoCreateOrConnectWithoutAutorInput[]
    createMany?: FotoCreateManyAutorInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type CronicaUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<CronicaCreateWithoutAutorInput, CronicaUncheckedCreateWithoutAutorInput> | CronicaCreateWithoutAutorInput[] | CronicaUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: CronicaCreateOrConnectWithoutAutorInput | CronicaCreateOrConnectWithoutAutorInput[]
    createMany?: CronicaCreateManyAutorInputEnvelope
    connect?: CronicaWhereUniqueInput | CronicaWhereUniqueInput[]
  }

  export type FotoUpdateManyWithoutAutorNestedInput = {
    create?: XOR<FotoCreateWithoutAutorInput, FotoUncheckedCreateWithoutAutorInput> | FotoCreateWithoutAutorInput[] | FotoUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutAutorInput | FotoCreateOrConnectWithoutAutorInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutAutorInput | FotoUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: FotoCreateManyAutorInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutAutorInput | FotoUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutAutorInput | FotoUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type CronicaUpdateManyWithoutAutorNestedInput = {
    create?: XOR<CronicaCreateWithoutAutorInput, CronicaUncheckedCreateWithoutAutorInput> | CronicaCreateWithoutAutorInput[] | CronicaUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: CronicaCreateOrConnectWithoutAutorInput | CronicaCreateOrConnectWithoutAutorInput[]
    upsert?: CronicaUpsertWithWhereUniqueWithoutAutorInput | CronicaUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: CronicaCreateManyAutorInputEnvelope
    set?: CronicaWhereUniqueInput | CronicaWhereUniqueInput[]
    disconnect?: CronicaWhereUniqueInput | CronicaWhereUniqueInput[]
    delete?: CronicaWhereUniqueInput | CronicaWhereUniqueInput[]
    connect?: CronicaWhereUniqueInput | CronicaWhereUniqueInput[]
    update?: CronicaUpdateWithWhereUniqueWithoutAutorInput | CronicaUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: CronicaUpdateManyWithWhereWithoutAutorInput | CronicaUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: CronicaScalarWhereInput | CronicaScalarWhereInput[]
  }

  export type FotoUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<FotoCreateWithoutAutorInput, FotoUncheckedCreateWithoutAutorInput> | FotoCreateWithoutAutorInput[] | FotoUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutAutorInput | FotoCreateOrConnectWithoutAutorInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutAutorInput | FotoUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: FotoCreateManyAutorInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutAutorInput | FotoUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutAutorInput | FotoUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type CronicaUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<CronicaCreateWithoutAutorInput, CronicaUncheckedCreateWithoutAutorInput> | CronicaCreateWithoutAutorInput[] | CronicaUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: CronicaCreateOrConnectWithoutAutorInput | CronicaCreateOrConnectWithoutAutorInput[]
    upsert?: CronicaUpsertWithWhereUniqueWithoutAutorInput | CronicaUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: CronicaCreateManyAutorInputEnvelope
    set?: CronicaWhereUniqueInput | CronicaWhereUniqueInput[]
    disconnect?: CronicaWhereUniqueInput | CronicaWhereUniqueInput[]
    delete?: CronicaWhereUniqueInput | CronicaWhereUniqueInput[]
    connect?: CronicaWhereUniqueInput | CronicaWhereUniqueInput[]
    update?: CronicaUpdateWithWhereUniqueWithoutAutorInput | CronicaUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: CronicaUpdateManyWithWhereWithoutAutorInput | CronicaUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: CronicaScalarWhereInput | CronicaScalarWhereInput[]
  }

  export type UsuariCreateNestedOneWithoutFotosInput = {
    create?: XOR<UsuariCreateWithoutFotosInput, UsuariUncheckedCreateWithoutFotosInput>
    connectOrCreate?: UsuariCreateOrConnectWithoutFotosInput
    connect?: UsuariWhereUniqueInput
  }

  export type ActuacioCreateNestedOneWithoutFotosInput = {
    create?: XOR<ActuacioCreateWithoutFotosInput, ActuacioUncheckedCreateWithoutFotosInput>
    connectOrCreate?: ActuacioCreateOrConnectWithoutFotosInput
    connect?: ActuacioWhereUniqueInput
  }

  export type CastellCreateNestedOneWithoutFotosInput = {
    create?: XOR<CastellCreateWithoutFotosInput, CastellUncheckedCreateWithoutFotosInput>
    connectOrCreate?: CastellCreateOrConnectWithoutFotosInput
    connect?: CastellWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuariUpdateOneRequiredWithoutFotosNestedInput = {
    create?: XOR<UsuariCreateWithoutFotosInput, UsuariUncheckedCreateWithoutFotosInput>
    connectOrCreate?: UsuariCreateOrConnectWithoutFotosInput
    upsert?: UsuariUpsertWithoutFotosInput
    connect?: UsuariWhereUniqueInput
    update?: XOR<XOR<UsuariUpdateToOneWithWhereWithoutFotosInput, UsuariUpdateWithoutFotosInput>, UsuariUncheckedUpdateWithoutFotosInput>
  }

  export type ActuacioUpdateOneRequiredWithoutFotosNestedInput = {
    create?: XOR<ActuacioCreateWithoutFotosInput, ActuacioUncheckedCreateWithoutFotosInput>
    connectOrCreate?: ActuacioCreateOrConnectWithoutFotosInput
    upsert?: ActuacioUpsertWithoutFotosInput
    connect?: ActuacioWhereUniqueInput
    update?: XOR<XOR<ActuacioUpdateToOneWithWhereWithoutFotosInput, ActuacioUpdateWithoutFotosInput>, ActuacioUncheckedUpdateWithoutFotosInput>
  }

  export type CastellUpdateOneWithoutFotosNestedInput = {
    create?: XOR<CastellCreateWithoutFotosInput, CastellUncheckedCreateWithoutFotosInput>
    connectOrCreate?: CastellCreateOrConnectWithoutFotosInput
    upsert?: CastellUpsertWithoutFotosInput
    disconnect?: CastellWhereInput | boolean
    delete?: CastellWhereInput | boolean
    connect?: CastellWhereUniqueInput
    update?: XOR<XOR<CastellUpdateToOneWithWhereWithoutFotosInput, CastellUpdateWithoutFotosInput>, CastellUncheckedUpdateWithoutFotosInput>
  }

  export type ActuacioCreateNestedManyWithoutTemporadaInput = {
    create?: XOR<ActuacioCreateWithoutTemporadaInput, ActuacioUncheckedCreateWithoutTemporadaInput> | ActuacioCreateWithoutTemporadaInput[] | ActuacioUncheckedCreateWithoutTemporadaInput[]
    connectOrCreate?: ActuacioCreateOrConnectWithoutTemporadaInput | ActuacioCreateOrConnectWithoutTemporadaInput[]
    createMany?: ActuacioCreateManyTemporadaInputEnvelope
    connect?: ActuacioWhereUniqueInput | ActuacioWhereUniqueInput[]
  }

  export type ActuacioUncheckedCreateNestedManyWithoutTemporadaInput = {
    create?: XOR<ActuacioCreateWithoutTemporadaInput, ActuacioUncheckedCreateWithoutTemporadaInput> | ActuacioCreateWithoutTemporadaInput[] | ActuacioUncheckedCreateWithoutTemporadaInput[]
    connectOrCreate?: ActuacioCreateOrConnectWithoutTemporadaInput | ActuacioCreateOrConnectWithoutTemporadaInput[]
    createMany?: ActuacioCreateManyTemporadaInputEnvelope
    connect?: ActuacioWhereUniqueInput | ActuacioWhereUniqueInput[]
  }

  export type ActuacioUpdateManyWithoutTemporadaNestedInput = {
    create?: XOR<ActuacioCreateWithoutTemporadaInput, ActuacioUncheckedCreateWithoutTemporadaInput> | ActuacioCreateWithoutTemporadaInput[] | ActuacioUncheckedCreateWithoutTemporadaInput[]
    connectOrCreate?: ActuacioCreateOrConnectWithoutTemporadaInput | ActuacioCreateOrConnectWithoutTemporadaInput[]
    upsert?: ActuacioUpsertWithWhereUniqueWithoutTemporadaInput | ActuacioUpsertWithWhereUniqueWithoutTemporadaInput[]
    createMany?: ActuacioCreateManyTemporadaInputEnvelope
    set?: ActuacioWhereUniqueInput | ActuacioWhereUniqueInput[]
    disconnect?: ActuacioWhereUniqueInput | ActuacioWhereUniqueInput[]
    delete?: ActuacioWhereUniqueInput | ActuacioWhereUniqueInput[]
    connect?: ActuacioWhereUniqueInput | ActuacioWhereUniqueInput[]
    update?: ActuacioUpdateWithWhereUniqueWithoutTemporadaInput | ActuacioUpdateWithWhereUniqueWithoutTemporadaInput[]
    updateMany?: ActuacioUpdateManyWithWhereWithoutTemporadaInput | ActuacioUpdateManyWithWhereWithoutTemporadaInput[]
    deleteMany?: ActuacioScalarWhereInput | ActuacioScalarWhereInput[]
  }

  export type ActuacioUncheckedUpdateManyWithoutTemporadaNestedInput = {
    create?: XOR<ActuacioCreateWithoutTemporadaInput, ActuacioUncheckedCreateWithoutTemporadaInput> | ActuacioCreateWithoutTemporadaInput[] | ActuacioUncheckedCreateWithoutTemporadaInput[]
    connectOrCreate?: ActuacioCreateOrConnectWithoutTemporadaInput | ActuacioCreateOrConnectWithoutTemporadaInput[]
    upsert?: ActuacioUpsertWithWhereUniqueWithoutTemporadaInput | ActuacioUpsertWithWhereUniqueWithoutTemporadaInput[]
    createMany?: ActuacioCreateManyTemporadaInputEnvelope
    set?: ActuacioWhereUniqueInput | ActuacioWhereUniqueInput[]
    disconnect?: ActuacioWhereUniqueInput | ActuacioWhereUniqueInput[]
    delete?: ActuacioWhereUniqueInput | ActuacioWhereUniqueInput[]
    connect?: ActuacioWhereUniqueInput | ActuacioWhereUniqueInput[]
    update?: ActuacioUpdateWithWhereUniqueWithoutTemporadaInput | ActuacioUpdateWithWhereUniqueWithoutTemporadaInput[]
    updateMany?: ActuacioUpdateManyWithWhereWithoutTemporadaInput | ActuacioUpdateManyWithWhereWithoutTemporadaInput[]
    deleteMany?: ActuacioScalarWhereInput | ActuacioScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CastellCreateWithoutActuacioInput = {
    nom: string
    resultat: string
    fotos?: FotoCreateNestedManyWithoutCastellInput
  }

  export type CastellUncheckedCreateWithoutActuacioInput = {
    id?: number
    nom: string
    resultat: string
    fotos?: FotoUncheckedCreateNestedManyWithoutCastellInput
  }

  export type CastellCreateOrConnectWithoutActuacioInput = {
    where: CastellWhereUniqueInput
    create: XOR<CastellCreateWithoutActuacioInput, CastellUncheckedCreateWithoutActuacioInput>
  }

  export type CastellCreateManyActuacioInputEnvelope = {
    data: CastellCreateManyActuacioInput | CastellCreateManyActuacioInput[]
    skipDuplicates?: boolean
  }

  export type FotoCreateWithoutActuacioInput = {
    created?: Date | string
    name: string
    url?: string | null
    mainFoto?: boolean
    autor: UsuariCreateNestedOneWithoutFotosInput
    castell?: CastellCreateNestedOneWithoutFotosInput
  }

  export type FotoUncheckedCreateWithoutActuacioInput = {
    id?: number
    created?: Date | string
    name: string
    url?: string | null
    autorId: number
    mainFoto?: boolean
    castellId: number
  }

  export type FotoCreateOrConnectWithoutActuacioInput = {
    where: FotoWhereUniqueInput
    create: XOR<FotoCreateWithoutActuacioInput, FotoUncheckedCreateWithoutActuacioInput>
  }

  export type FotoCreateManyActuacioInputEnvelope = {
    data: FotoCreateManyActuacioInput | FotoCreateManyActuacioInput[]
    skipDuplicates?: boolean
  }

  export type TemporadaCreateWithoutActuacionsInput = {
    year: number
  }

  export type TemporadaUncheckedCreateWithoutActuacionsInput = {
    id?: number
    year: number
  }

  export type TemporadaCreateOrConnectWithoutActuacionsInput = {
    where: TemporadaWhereUniqueInput
    create: XOR<TemporadaCreateWithoutActuacionsInput, TemporadaUncheckedCreateWithoutActuacionsInput>
  }

  export type CronicaCreateWithoutActuacioInput = {
    created?: Date | string
    Titol: string
    Text: string
    autor: UsuariCreateNestedOneWithoutCroniquesInput
  }

  export type CronicaUncheckedCreateWithoutActuacioInput = {
    id?: number
    created?: Date | string
    Titol: string
    Text: string
    autorId: number
  }

  export type CronicaCreateOrConnectWithoutActuacioInput = {
    where: CronicaWhereUniqueInput
    create: XOR<CronicaCreateWithoutActuacioInput, CronicaUncheckedCreateWithoutActuacioInput>
  }

  export type CastellUpsertWithWhereUniqueWithoutActuacioInput = {
    where: CastellWhereUniqueInput
    update: XOR<CastellUpdateWithoutActuacioInput, CastellUncheckedUpdateWithoutActuacioInput>
    create: XOR<CastellCreateWithoutActuacioInput, CastellUncheckedCreateWithoutActuacioInput>
  }

  export type CastellUpdateWithWhereUniqueWithoutActuacioInput = {
    where: CastellWhereUniqueInput
    data: XOR<CastellUpdateWithoutActuacioInput, CastellUncheckedUpdateWithoutActuacioInput>
  }

  export type CastellUpdateManyWithWhereWithoutActuacioInput = {
    where: CastellScalarWhereInput
    data: XOR<CastellUpdateManyMutationInput, CastellUncheckedUpdateManyWithoutActuacioInput>
  }

  export type CastellScalarWhereInput = {
    AND?: CastellScalarWhereInput | CastellScalarWhereInput[]
    OR?: CastellScalarWhereInput[]
    NOT?: CastellScalarWhereInput | CastellScalarWhereInput[]
    id?: IntFilter<"Castell"> | number
    nom?: StringFilter<"Castell"> | string
    actuacioId?: IntFilter<"Castell"> | number
    resultat?: StringFilter<"Castell"> | string
  }

  export type FotoUpsertWithWhereUniqueWithoutActuacioInput = {
    where: FotoWhereUniqueInput
    update: XOR<FotoUpdateWithoutActuacioInput, FotoUncheckedUpdateWithoutActuacioInput>
    create: XOR<FotoCreateWithoutActuacioInput, FotoUncheckedCreateWithoutActuacioInput>
  }

  export type FotoUpdateWithWhereUniqueWithoutActuacioInput = {
    where: FotoWhereUniqueInput
    data: XOR<FotoUpdateWithoutActuacioInput, FotoUncheckedUpdateWithoutActuacioInput>
  }

  export type FotoUpdateManyWithWhereWithoutActuacioInput = {
    where: FotoScalarWhereInput
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyWithoutActuacioInput>
  }

  export type FotoScalarWhereInput = {
    AND?: FotoScalarWhereInput | FotoScalarWhereInput[]
    OR?: FotoScalarWhereInput[]
    NOT?: FotoScalarWhereInput | FotoScalarWhereInput[]
    id?: IntFilter<"Foto"> | number
    created?: DateTimeFilter<"Foto"> | Date | string
    name?: StringFilter<"Foto"> | string
    url?: StringNullableFilter<"Foto"> | string | null
    autorId?: IntFilter<"Foto"> | number
    mainFoto?: BoolFilter<"Foto"> | boolean
    actuacioId?: IntFilter<"Foto"> | number
    castellId?: IntFilter<"Foto"> | number
  }

  export type TemporadaUpsertWithoutActuacionsInput = {
    update: XOR<TemporadaUpdateWithoutActuacionsInput, TemporadaUncheckedUpdateWithoutActuacionsInput>
    create: XOR<TemporadaCreateWithoutActuacionsInput, TemporadaUncheckedCreateWithoutActuacionsInput>
    where?: TemporadaWhereInput
  }

  export type TemporadaUpdateToOneWithWhereWithoutActuacionsInput = {
    where?: TemporadaWhereInput
    data: XOR<TemporadaUpdateWithoutActuacionsInput, TemporadaUncheckedUpdateWithoutActuacionsInput>
  }

  export type TemporadaUpdateWithoutActuacionsInput = {
    year?: IntFieldUpdateOperationsInput | number
  }

  export type TemporadaUncheckedUpdateWithoutActuacionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type CronicaUpsertWithoutActuacioInput = {
    update: XOR<CronicaUpdateWithoutActuacioInput, CronicaUncheckedUpdateWithoutActuacioInput>
    create: XOR<CronicaCreateWithoutActuacioInput, CronicaUncheckedCreateWithoutActuacioInput>
    where?: CronicaWhereInput
  }

  export type CronicaUpdateToOneWithWhereWithoutActuacioInput = {
    where?: CronicaWhereInput
    data: XOR<CronicaUpdateWithoutActuacioInput, CronicaUncheckedUpdateWithoutActuacioInput>
  }

  export type CronicaUpdateWithoutActuacioInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    Titol?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    autor?: UsuariUpdateOneRequiredWithoutCroniquesNestedInput
  }

  export type CronicaUncheckedUpdateWithoutActuacioInput = {
    id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    Titol?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuariCreateWithoutCroniquesInput = {
    correu: string
    contrassenya: string
    nom: string
    fotos?: FotoCreateNestedManyWithoutAutorInput
  }

  export type UsuariUncheckedCreateWithoutCroniquesInput = {
    id?: number
    correu: string
    contrassenya: string
    nom: string
    fotos?: FotoUncheckedCreateNestedManyWithoutAutorInput
  }

  export type UsuariCreateOrConnectWithoutCroniquesInput = {
    where: UsuariWhereUniqueInput
    create: XOR<UsuariCreateWithoutCroniquesInput, UsuariUncheckedCreateWithoutCroniquesInput>
  }

  export type ActuacioCreateWithoutCronicaInput = {
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
    nom: string
    cronicaId?: number | null
    castells?: CastellCreateNestedManyWithoutActuacioInput
    fotos?: FotoCreateNestedManyWithoutActuacioInput
    temporada: TemporadaCreateNestedOneWithoutActuacionsInput
  }

  export type ActuacioUncheckedCreateWithoutCronicaInput = {
    id?: number
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
    nom: string
    temporadaId: number
    cronicaId?: number | null
    castells?: CastellUncheckedCreateNestedManyWithoutActuacioInput
    fotos?: FotoUncheckedCreateNestedManyWithoutActuacioInput
  }

  export type ActuacioCreateOrConnectWithoutCronicaInput = {
    where: ActuacioWhereUniqueInput
    create: XOR<ActuacioCreateWithoutCronicaInput, ActuacioUncheckedCreateWithoutCronicaInput>
  }

  export type UsuariUpsertWithoutCroniquesInput = {
    update: XOR<UsuariUpdateWithoutCroniquesInput, UsuariUncheckedUpdateWithoutCroniquesInput>
    create: XOR<UsuariCreateWithoutCroniquesInput, UsuariUncheckedCreateWithoutCroniquesInput>
    where?: UsuariWhereInput
  }

  export type UsuariUpdateToOneWithWhereWithoutCroniquesInput = {
    where?: UsuariWhereInput
    data: XOR<UsuariUpdateWithoutCroniquesInput, UsuariUncheckedUpdateWithoutCroniquesInput>
  }

  export type UsuariUpdateWithoutCroniquesInput = {
    correu?: StringFieldUpdateOperationsInput | string
    contrassenya?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    fotos?: FotoUpdateManyWithoutAutorNestedInput
  }

  export type UsuariUncheckedUpdateWithoutCroniquesInput = {
    id?: IntFieldUpdateOperationsInput | number
    correu?: StringFieldUpdateOperationsInput | string
    contrassenya?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    fotos?: FotoUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type ActuacioUpsertWithoutCronicaInput = {
    update: XOR<ActuacioUpdateWithoutCronicaInput, ActuacioUncheckedUpdateWithoutCronicaInput>
    create: XOR<ActuacioCreateWithoutCronicaInput, ActuacioUncheckedCreateWithoutCronicaInput>
    where?: ActuacioWhereInput
  }

  export type ActuacioUpdateToOneWithWhereWithoutCronicaInput = {
    where?: ActuacioWhereInput
    data: XOR<ActuacioUpdateWithoutCronicaInput, ActuacioUncheckedUpdateWithoutCronicaInput>
  }

  export type ActuacioUpdateWithoutCronicaInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    cronicaId?: NullableIntFieldUpdateOperationsInput | number | null
    castells?: CastellUpdateManyWithoutActuacioNestedInput
    fotos?: FotoUpdateManyWithoutActuacioNestedInput
    temporada?: TemporadaUpdateOneRequiredWithoutActuacionsNestedInput
  }

  export type ActuacioUncheckedUpdateWithoutCronicaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    temporadaId?: IntFieldUpdateOperationsInput | number
    cronicaId?: NullableIntFieldUpdateOperationsInput | number | null
    castells?: CastellUncheckedUpdateManyWithoutActuacioNestedInput
    fotos?: FotoUncheckedUpdateManyWithoutActuacioNestedInput
  }

  export type ActuacioCreateWithoutCastellsInput = {
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
    nom: string
    cronicaId?: number | null
    fotos?: FotoCreateNestedManyWithoutActuacioInput
    temporada: TemporadaCreateNestedOneWithoutActuacionsInput
    cronica?: CronicaCreateNestedOneWithoutActuacioInput
  }

  export type ActuacioUncheckedCreateWithoutCastellsInput = {
    id?: number
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
    nom: string
    temporadaId: number
    cronicaId?: number | null
    fotos?: FotoUncheckedCreateNestedManyWithoutActuacioInput
    cronica?: CronicaUncheckedCreateNestedOneWithoutActuacioInput
  }

  export type ActuacioCreateOrConnectWithoutCastellsInput = {
    where: ActuacioWhereUniqueInput
    create: XOR<ActuacioCreateWithoutCastellsInput, ActuacioUncheckedCreateWithoutCastellsInput>
  }

  export type FotoCreateWithoutCastellInput = {
    created?: Date | string
    name: string
    url?: string | null
    mainFoto?: boolean
    autor: UsuariCreateNestedOneWithoutFotosInput
    actuacio: ActuacioCreateNestedOneWithoutFotosInput
  }

  export type FotoUncheckedCreateWithoutCastellInput = {
    id?: number
    created?: Date | string
    name: string
    url?: string | null
    autorId: number
    mainFoto?: boolean
    actuacioId: number
  }

  export type FotoCreateOrConnectWithoutCastellInput = {
    where: FotoWhereUniqueInput
    create: XOR<FotoCreateWithoutCastellInput, FotoUncheckedCreateWithoutCastellInput>
  }

  export type FotoCreateManyCastellInputEnvelope = {
    data: FotoCreateManyCastellInput | FotoCreateManyCastellInput[]
    skipDuplicates?: boolean
  }

  export type ActuacioUpsertWithoutCastellsInput = {
    update: XOR<ActuacioUpdateWithoutCastellsInput, ActuacioUncheckedUpdateWithoutCastellsInput>
    create: XOR<ActuacioCreateWithoutCastellsInput, ActuacioUncheckedCreateWithoutCastellsInput>
    where?: ActuacioWhereInput
  }

  export type ActuacioUpdateToOneWithWhereWithoutCastellsInput = {
    where?: ActuacioWhereInput
    data: XOR<ActuacioUpdateWithoutCastellsInput, ActuacioUncheckedUpdateWithoutCastellsInput>
  }

  export type ActuacioUpdateWithoutCastellsInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    cronicaId?: NullableIntFieldUpdateOperationsInput | number | null
    fotos?: FotoUpdateManyWithoutActuacioNestedInput
    temporada?: TemporadaUpdateOneRequiredWithoutActuacionsNestedInput
    cronica?: CronicaUpdateOneWithoutActuacioNestedInput
  }

  export type ActuacioUncheckedUpdateWithoutCastellsInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    temporadaId?: IntFieldUpdateOperationsInput | number
    cronicaId?: NullableIntFieldUpdateOperationsInput | number | null
    fotos?: FotoUncheckedUpdateManyWithoutActuacioNestedInput
    cronica?: CronicaUncheckedUpdateOneWithoutActuacioNestedInput
  }

  export type FotoUpsertWithWhereUniqueWithoutCastellInput = {
    where: FotoWhereUniqueInput
    update: XOR<FotoUpdateWithoutCastellInput, FotoUncheckedUpdateWithoutCastellInput>
    create: XOR<FotoCreateWithoutCastellInput, FotoUncheckedCreateWithoutCastellInput>
  }

  export type FotoUpdateWithWhereUniqueWithoutCastellInput = {
    where: FotoWhereUniqueInput
    data: XOR<FotoUpdateWithoutCastellInput, FotoUncheckedUpdateWithoutCastellInput>
  }

  export type FotoUpdateManyWithWhereWithoutCastellInput = {
    where: FotoScalarWhereInput
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyWithoutCastellInput>
  }

  export type FotoCreateWithoutAutorInput = {
    created?: Date | string
    name: string
    url?: string | null
    mainFoto?: boolean
    actuacio: ActuacioCreateNestedOneWithoutFotosInput
    castell?: CastellCreateNestedOneWithoutFotosInput
  }

  export type FotoUncheckedCreateWithoutAutorInput = {
    id?: number
    created?: Date | string
    name: string
    url?: string | null
    mainFoto?: boolean
    actuacioId: number
    castellId: number
  }

  export type FotoCreateOrConnectWithoutAutorInput = {
    where: FotoWhereUniqueInput
    create: XOR<FotoCreateWithoutAutorInput, FotoUncheckedCreateWithoutAutorInput>
  }

  export type FotoCreateManyAutorInputEnvelope = {
    data: FotoCreateManyAutorInput | FotoCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type CronicaCreateWithoutAutorInput = {
    created?: Date | string
    Titol: string
    Text: string
    actuacio: ActuacioCreateNestedOneWithoutCronicaInput
  }

  export type CronicaUncheckedCreateWithoutAutorInput = {
    id?: number
    created?: Date | string
    Titol: string
    Text: string
    actuacioId: number
  }

  export type CronicaCreateOrConnectWithoutAutorInput = {
    where: CronicaWhereUniqueInput
    create: XOR<CronicaCreateWithoutAutorInput, CronicaUncheckedCreateWithoutAutorInput>
  }

  export type CronicaCreateManyAutorInputEnvelope = {
    data: CronicaCreateManyAutorInput | CronicaCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type FotoUpsertWithWhereUniqueWithoutAutorInput = {
    where: FotoWhereUniqueInput
    update: XOR<FotoUpdateWithoutAutorInput, FotoUncheckedUpdateWithoutAutorInput>
    create: XOR<FotoCreateWithoutAutorInput, FotoUncheckedCreateWithoutAutorInput>
  }

  export type FotoUpdateWithWhereUniqueWithoutAutorInput = {
    where: FotoWhereUniqueInput
    data: XOR<FotoUpdateWithoutAutorInput, FotoUncheckedUpdateWithoutAutorInput>
  }

  export type FotoUpdateManyWithWhereWithoutAutorInput = {
    where: FotoScalarWhereInput
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyWithoutAutorInput>
  }

  export type CronicaUpsertWithWhereUniqueWithoutAutorInput = {
    where: CronicaWhereUniqueInput
    update: XOR<CronicaUpdateWithoutAutorInput, CronicaUncheckedUpdateWithoutAutorInput>
    create: XOR<CronicaCreateWithoutAutorInput, CronicaUncheckedCreateWithoutAutorInput>
  }

  export type CronicaUpdateWithWhereUniqueWithoutAutorInput = {
    where: CronicaWhereUniqueInput
    data: XOR<CronicaUpdateWithoutAutorInput, CronicaUncheckedUpdateWithoutAutorInput>
  }

  export type CronicaUpdateManyWithWhereWithoutAutorInput = {
    where: CronicaScalarWhereInput
    data: XOR<CronicaUpdateManyMutationInput, CronicaUncheckedUpdateManyWithoutAutorInput>
  }

  export type CronicaScalarWhereInput = {
    AND?: CronicaScalarWhereInput | CronicaScalarWhereInput[]
    OR?: CronicaScalarWhereInput[]
    NOT?: CronicaScalarWhereInput | CronicaScalarWhereInput[]
    id?: IntFilter<"Cronica"> | number
    created?: DateTimeFilter<"Cronica"> | Date | string
    Titol?: StringFilter<"Cronica"> | string
    Text?: StringFilter<"Cronica"> | string
    autorId?: IntFilter<"Cronica"> | number
    actuacioId?: IntFilter<"Cronica"> | number
  }

  export type UsuariCreateWithoutFotosInput = {
    correu: string
    contrassenya: string
    nom: string
    croniques?: CronicaCreateNestedManyWithoutAutorInput
  }

  export type UsuariUncheckedCreateWithoutFotosInput = {
    id?: number
    correu: string
    contrassenya: string
    nom: string
    croniques?: CronicaUncheckedCreateNestedManyWithoutAutorInput
  }

  export type UsuariCreateOrConnectWithoutFotosInput = {
    where: UsuariWhereUniqueInput
    create: XOR<UsuariCreateWithoutFotosInput, UsuariUncheckedCreateWithoutFotosInput>
  }

  export type ActuacioCreateWithoutFotosInput = {
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
    nom: string
    cronicaId?: number | null
    castells?: CastellCreateNestedManyWithoutActuacioInput
    temporada: TemporadaCreateNestedOneWithoutActuacionsInput
    cronica?: CronicaCreateNestedOneWithoutActuacioInput
  }

  export type ActuacioUncheckedCreateWithoutFotosInput = {
    id?: number
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
    nom: string
    temporadaId: number
    cronicaId?: number | null
    castells?: CastellUncheckedCreateNestedManyWithoutActuacioInput
    cronica?: CronicaUncheckedCreateNestedOneWithoutActuacioInput
  }

  export type ActuacioCreateOrConnectWithoutFotosInput = {
    where: ActuacioWhereUniqueInput
    create: XOR<ActuacioCreateWithoutFotosInput, ActuacioUncheckedCreateWithoutFotosInput>
  }

  export type CastellCreateWithoutFotosInput = {
    nom: string
    resultat: string
    actuacio: ActuacioCreateNestedOneWithoutCastellsInput
  }

  export type CastellUncheckedCreateWithoutFotosInput = {
    id?: number
    nom: string
    actuacioId: number
    resultat: string
  }

  export type CastellCreateOrConnectWithoutFotosInput = {
    where: CastellWhereUniqueInput
    create: XOR<CastellCreateWithoutFotosInput, CastellUncheckedCreateWithoutFotosInput>
  }

  export type UsuariUpsertWithoutFotosInput = {
    update: XOR<UsuariUpdateWithoutFotosInput, UsuariUncheckedUpdateWithoutFotosInput>
    create: XOR<UsuariCreateWithoutFotosInput, UsuariUncheckedCreateWithoutFotosInput>
    where?: UsuariWhereInput
  }

  export type UsuariUpdateToOneWithWhereWithoutFotosInput = {
    where?: UsuariWhereInput
    data: XOR<UsuariUpdateWithoutFotosInput, UsuariUncheckedUpdateWithoutFotosInput>
  }

  export type UsuariUpdateWithoutFotosInput = {
    correu?: StringFieldUpdateOperationsInput | string
    contrassenya?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    croniques?: CronicaUpdateManyWithoutAutorNestedInput
  }

  export type UsuariUncheckedUpdateWithoutFotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    correu?: StringFieldUpdateOperationsInput | string
    contrassenya?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    croniques?: CronicaUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type ActuacioUpsertWithoutFotosInput = {
    update: XOR<ActuacioUpdateWithoutFotosInput, ActuacioUncheckedUpdateWithoutFotosInput>
    create: XOR<ActuacioCreateWithoutFotosInput, ActuacioUncheckedCreateWithoutFotosInput>
    where?: ActuacioWhereInput
  }

  export type ActuacioUpdateToOneWithWhereWithoutFotosInput = {
    where?: ActuacioWhereInput
    data: XOR<ActuacioUpdateWithoutFotosInput, ActuacioUncheckedUpdateWithoutFotosInput>
  }

  export type ActuacioUpdateWithoutFotosInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    cronicaId?: NullableIntFieldUpdateOperationsInput | number | null
    castells?: CastellUpdateManyWithoutActuacioNestedInput
    temporada?: TemporadaUpdateOneRequiredWithoutActuacionsNestedInput
    cronica?: CronicaUpdateOneWithoutActuacioNestedInput
  }

  export type ActuacioUncheckedUpdateWithoutFotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    temporadaId?: IntFieldUpdateOperationsInput | number
    cronicaId?: NullableIntFieldUpdateOperationsInput | number | null
    castells?: CastellUncheckedUpdateManyWithoutActuacioNestedInput
    cronica?: CronicaUncheckedUpdateOneWithoutActuacioNestedInput
  }

  export type CastellUpsertWithoutFotosInput = {
    update: XOR<CastellUpdateWithoutFotosInput, CastellUncheckedUpdateWithoutFotosInput>
    create: XOR<CastellCreateWithoutFotosInput, CastellUncheckedCreateWithoutFotosInput>
    where?: CastellWhereInput
  }

  export type CastellUpdateToOneWithWhereWithoutFotosInput = {
    where?: CastellWhereInput
    data: XOR<CastellUpdateWithoutFotosInput, CastellUncheckedUpdateWithoutFotosInput>
  }

  export type CastellUpdateWithoutFotosInput = {
    nom?: StringFieldUpdateOperationsInput | string
    resultat?: StringFieldUpdateOperationsInput | string
    actuacio?: ActuacioUpdateOneRequiredWithoutCastellsNestedInput
  }

  export type CastellUncheckedUpdateWithoutFotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    actuacioId?: IntFieldUpdateOperationsInput | number
    resultat?: StringFieldUpdateOperationsInput | string
  }

  export type ActuacioCreateWithoutTemporadaInput = {
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
    nom: string
    cronicaId?: number | null
    castells?: CastellCreateNestedManyWithoutActuacioInput
    fotos?: FotoCreateNestedManyWithoutActuacioInput
    cronica?: CronicaCreateNestedOneWithoutActuacioInput
  }

  export type ActuacioUncheckedCreateWithoutTemporadaInput = {
    id?: number
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
    nom: string
    cronicaId?: number | null
    castells?: CastellUncheckedCreateNestedManyWithoutActuacioInput
    fotos?: FotoUncheckedCreateNestedManyWithoutActuacioInput
    cronica?: CronicaUncheckedCreateNestedOneWithoutActuacioInput
  }

  export type ActuacioCreateOrConnectWithoutTemporadaInput = {
    where: ActuacioWhereUniqueInput
    create: XOR<ActuacioCreateWithoutTemporadaInput, ActuacioUncheckedCreateWithoutTemporadaInput>
  }

  export type ActuacioCreateManyTemporadaInputEnvelope = {
    data: ActuacioCreateManyTemporadaInput | ActuacioCreateManyTemporadaInput[]
    skipDuplicates?: boolean
  }

  export type ActuacioUpsertWithWhereUniqueWithoutTemporadaInput = {
    where: ActuacioWhereUniqueInput
    update: XOR<ActuacioUpdateWithoutTemporadaInput, ActuacioUncheckedUpdateWithoutTemporadaInput>
    create: XOR<ActuacioCreateWithoutTemporadaInput, ActuacioUncheckedCreateWithoutTemporadaInput>
  }

  export type ActuacioUpdateWithWhereUniqueWithoutTemporadaInput = {
    where: ActuacioWhereUniqueInput
    data: XOR<ActuacioUpdateWithoutTemporadaInput, ActuacioUncheckedUpdateWithoutTemporadaInput>
  }

  export type ActuacioUpdateManyWithWhereWithoutTemporadaInput = {
    where: ActuacioScalarWhereInput
    data: XOR<ActuacioUpdateManyMutationInput, ActuacioUncheckedUpdateManyWithoutTemporadaInput>
  }

  export type ActuacioScalarWhereInput = {
    AND?: ActuacioScalarWhereInput | ActuacioScalarWhereInput[]
    OR?: ActuacioScalarWhereInput[]
    NOT?: ActuacioScalarWhereInput | ActuacioScalarWhereInput[]
    id?: IntFilter<"Actuacio"> | number
    data?: DateTimeFilter<"Actuacio"> | Date | string
    dataHora?: DateTimeNullableFilter<"Actuacio"> | Date | string | null
    lloc?: StringNullableFilter<"Actuacio"> | string | null
    ciutat?: StringFilter<"Actuacio"> | string
    nom?: StringFilter<"Actuacio"> | string
    temporadaId?: IntFilter<"Actuacio"> | number
    cronicaId?: IntNullableFilter<"Actuacio"> | number | null
  }

  export type CastellCreateManyActuacioInput = {
    id?: number
    nom: string
    resultat: string
  }

  export type FotoCreateManyActuacioInput = {
    id?: number
    created?: Date | string
    name: string
    url?: string | null
    autorId: number
    mainFoto?: boolean
    castellId: number
  }

  export type CastellUpdateWithoutActuacioInput = {
    nom?: StringFieldUpdateOperationsInput | string
    resultat?: StringFieldUpdateOperationsInput | string
    fotos?: FotoUpdateManyWithoutCastellNestedInput
  }

  export type CastellUncheckedUpdateWithoutActuacioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    resultat?: StringFieldUpdateOperationsInput | string
    fotos?: FotoUncheckedUpdateManyWithoutCastellNestedInput
  }

  export type CastellUncheckedUpdateManyWithoutActuacioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    resultat?: StringFieldUpdateOperationsInput | string
  }

  export type FotoUpdateWithoutActuacioInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    mainFoto?: BoolFieldUpdateOperationsInput | boolean
    autor?: UsuariUpdateOneRequiredWithoutFotosNestedInput
    castell?: CastellUpdateOneWithoutFotosNestedInput
  }

  export type FotoUncheckedUpdateWithoutActuacioInput = {
    id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
    mainFoto?: BoolFieldUpdateOperationsInput | boolean
    castellId?: IntFieldUpdateOperationsInput | number
  }

  export type FotoUncheckedUpdateManyWithoutActuacioInput = {
    id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
    mainFoto?: BoolFieldUpdateOperationsInput | boolean
    castellId?: IntFieldUpdateOperationsInput | number
  }

  export type FotoCreateManyCastellInput = {
    id?: number
    created?: Date | string
    name: string
    url?: string | null
    autorId: number
    mainFoto?: boolean
    actuacioId: number
  }

  export type FotoUpdateWithoutCastellInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    mainFoto?: BoolFieldUpdateOperationsInput | boolean
    autor?: UsuariUpdateOneRequiredWithoutFotosNestedInput
    actuacio?: ActuacioUpdateOneRequiredWithoutFotosNestedInput
  }

  export type FotoUncheckedUpdateWithoutCastellInput = {
    id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
    mainFoto?: BoolFieldUpdateOperationsInput | boolean
    actuacioId?: IntFieldUpdateOperationsInput | number
  }

  export type FotoUncheckedUpdateManyWithoutCastellInput = {
    id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
    mainFoto?: BoolFieldUpdateOperationsInput | boolean
    actuacioId?: IntFieldUpdateOperationsInput | number
  }

  export type FotoCreateManyAutorInput = {
    id?: number
    created?: Date | string
    name: string
    url?: string | null
    mainFoto?: boolean
    actuacioId: number
    castellId: number
  }

  export type CronicaCreateManyAutorInput = {
    id?: number
    created?: Date | string
    Titol: string
    Text: string
    actuacioId: number
  }

  export type FotoUpdateWithoutAutorInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    mainFoto?: BoolFieldUpdateOperationsInput | boolean
    actuacio?: ActuacioUpdateOneRequiredWithoutFotosNestedInput
    castell?: CastellUpdateOneWithoutFotosNestedInput
  }

  export type FotoUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    mainFoto?: BoolFieldUpdateOperationsInput | boolean
    actuacioId?: IntFieldUpdateOperationsInput | number
    castellId?: IntFieldUpdateOperationsInput | number
  }

  export type FotoUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    mainFoto?: BoolFieldUpdateOperationsInput | boolean
    actuacioId?: IntFieldUpdateOperationsInput | number
    castellId?: IntFieldUpdateOperationsInput | number
  }

  export type CronicaUpdateWithoutAutorInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    Titol?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    actuacio?: ActuacioUpdateOneRequiredWithoutCronicaNestedInput
  }

  export type CronicaUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    Titol?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    actuacioId?: IntFieldUpdateOperationsInput | number
  }

  export type CronicaUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    Titol?: StringFieldUpdateOperationsInput | string
    Text?: StringFieldUpdateOperationsInput | string
    actuacioId?: IntFieldUpdateOperationsInput | number
  }

  export type ActuacioCreateManyTemporadaInput = {
    id?: number
    data: Date | string
    dataHora?: Date | string | null
    lloc?: string | null
    ciutat: string
    nom: string
    cronicaId?: number | null
  }

  export type ActuacioUpdateWithoutTemporadaInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    cronicaId?: NullableIntFieldUpdateOperationsInput | number | null
    castells?: CastellUpdateManyWithoutActuacioNestedInput
    fotos?: FotoUpdateManyWithoutActuacioNestedInput
    cronica?: CronicaUpdateOneWithoutActuacioNestedInput
  }

  export type ActuacioUncheckedUpdateWithoutTemporadaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    cronicaId?: NullableIntFieldUpdateOperationsInput | number | null
    castells?: CastellUncheckedUpdateManyWithoutActuacioNestedInput
    fotos?: FotoUncheckedUpdateManyWithoutActuacioNestedInput
    cronica?: CronicaUncheckedUpdateOneWithoutActuacioNestedInput
  }

  export type ActuacioUncheckedUpdateManyWithoutTemporadaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lloc?: NullableStringFieldUpdateOperationsInput | string | null
    ciutat?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    cronicaId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}