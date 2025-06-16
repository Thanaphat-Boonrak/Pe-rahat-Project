
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
 * Model UserInfo
 * 
 */
export type UserInfo = $Result.DefaultSelection<Prisma.$UserInfoPayload>
/**
 * Model HouseInfo
 * 
 */
export type HouseInfo = $Result.DefaultSelection<Prisma.$HouseInfoPayload>
/**
 * Model Hint
 * 
 */
export type Hint = $Result.DefaultSelection<Prisma.$HintPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserInfos
 * const userInfos = await prisma.userInfo.findMany()
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
   * // Fetch zero or more UserInfos
   * const userInfos = await prisma.userInfo.findMany()
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
   * `prisma.userInfo`: Exposes CRUD operations for the **UserInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInfos
    * const userInfos = await prisma.userInfo.findMany()
    * ```
    */
  get userInfo(): Prisma.UserInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.houseInfo`: Exposes CRUD operations for the **HouseInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HouseInfos
    * const houseInfos = await prisma.houseInfo.findMany()
    * ```
    */
  get houseInfo(): Prisma.HouseInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hint`: Exposes CRUD operations for the **Hint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hints
    * const hints = await prisma.hint.findMany()
    * ```
    */
  get hint(): Prisma.HintDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    UserInfo: 'UserInfo',
    HouseInfo: 'HouseInfo',
    Hint: 'Hint'
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
      modelProps: "userInfo" | "houseInfo" | "hint"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserInfo: {
        payload: Prisma.$UserInfoPayload<ExtArgs>
        fields: Prisma.UserInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          findFirst: {
            args: Prisma.UserInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          findMany: {
            args: Prisma.UserInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>[]
          }
          create: {
            args: Prisma.UserInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          createMany: {
            args: Prisma.UserInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          update: {
            args: Prisma.UserInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          deleteMany: {
            args: Prisma.UserInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          aggregate: {
            args: Prisma.UserInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserInfo>
          }
          groupBy: {
            args: Prisma.UserInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserInfoCountArgs<ExtArgs>
            result: $Utils.Optional<UserInfoCountAggregateOutputType> | number
          }
        }
      }
      HouseInfo: {
        payload: Prisma.$HouseInfoPayload<ExtArgs>
        fields: Prisma.HouseInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseInfoPayload>
          }
          findFirst: {
            args: Prisma.HouseInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseInfoPayload>
          }
          findMany: {
            args: Prisma.HouseInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseInfoPayload>[]
          }
          create: {
            args: Prisma.HouseInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseInfoPayload>
          }
          createMany: {
            args: Prisma.HouseInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HouseInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseInfoPayload>
          }
          update: {
            args: Prisma.HouseInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseInfoPayload>
          }
          deleteMany: {
            args: Prisma.HouseInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HouseInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseInfoPayload>
          }
          aggregate: {
            args: Prisma.HouseInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHouseInfo>
          }
          groupBy: {
            args: Prisma.HouseInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HouseInfoCountArgs<ExtArgs>
            result: $Utils.Optional<HouseInfoCountAggregateOutputType> | number
          }
        }
      }
      Hint: {
        payload: Prisma.$HintPayload<ExtArgs>
        fields: Prisma.HintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          findFirst: {
            args: Prisma.HintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          findMany: {
            args: Prisma.HintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>[]
          }
          create: {
            args: Prisma.HintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          createMany: {
            args: Prisma.HintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          update: {
            args: Prisma.HintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          deleteMany: {
            args: Prisma.HintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          aggregate: {
            args: Prisma.HintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHint>
          }
          groupBy: {
            args: Prisma.HintGroupByArgs<ExtArgs>
            result: $Utils.Optional<HintGroupByOutputType>[]
          }
          count: {
            args: Prisma.HintCountArgs<ExtArgs>
            result: $Utils.Optional<HintCountAggregateOutputType> | number
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
    userInfo?: UserInfoOmit
    houseInfo?: HouseInfoOmit
    hint?: HintOmit
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
   * Count Type UserInfoCountOutputType
   */

  export type UserInfoCountOutputType = {
    hints: number
  }

  export type UserInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hints?: boolean | UserInfoCountOutputTypeCountHintsArgs
  }

  // Custom InputTypes
  /**
   * UserInfoCountOutputType without action
   */
  export type UserInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfoCountOutputType
     */
    select?: UserInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserInfoCountOutputType without action
   */
  export type UserInfoCountOutputTypeCountHintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HintWhereInput
  }


  /**
   * Count Type HouseInfoCountOutputType
   */

  export type HouseInfoCountOutputType = {
    users: number
  }

  export type HouseInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | HouseInfoCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * HouseInfoCountOutputType without action
   */
  export type HouseInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseInfoCountOutputType
     */
    select?: HouseInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HouseInfoCountOutputType without action
   */
  export type HouseInfoCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInfoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserInfo
   */

  export type AggregateUserInfo = {
    _count: UserInfoCountAggregateOutputType | null
    _avg: UserInfoAvgAggregateOutputType | null
    _sum: UserInfoSumAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  export type UserInfoAvgAggregateOutputType = {
    house_id: number | null
  }

  export type UserInfoSumAggregateOutputType = {
    house_id: number | null
  }

  export type UserInfoMinAggregateOutputType = {
    user_id: string | null
    student_id: string | null
    house_id: number | null
    matched_user: string | null
  }

  export type UserInfoMaxAggregateOutputType = {
    user_id: string | null
    student_id: string | null
    house_id: number | null
    matched_user: string | null
  }

  export type UserInfoCountAggregateOutputType = {
    user_id: number
    student_id: number
    house_id: number
    matched_user: number
    _all: number
  }


  export type UserInfoAvgAggregateInputType = {
    house_id?: true
  }

  export type UserInfoSumAggregateInputType = {
    house_id?: true
  }

  export type UserInfoMinAggregateInputType = {
    user_id?: true
    student_id?: true
    house_id?: true
    matched_user?: true
  }

  export type UserInfoMaxAggregateInputType = {
    user_id?: true
    student_id?: true
    house_id?: true
    matched_user?: true
  }

  export type UserInfoCountAggregateInputType = {
    user_id?: true
    student_id?: true
    house_id?: true
    matched_user?: true
    _all?: true
  }

  export type UserInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInfo to aggregate.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInfos
    **/
    _count?: true | UserInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInfoMaxAggregateInputType
  }

  export type GetUserInfoAggregateType<T extends UserInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInfo[P]>
      : GetScalarType<T[P], AggregateUserInfo[P]>
  }




  export type UserInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInfoWhereInput
    orderBy?: UserInfoOrderByWithAggregationInput | UserInfoOrderByWithAggregationInput[]
    by: UserInfoScalarFieldEnum[] | UserInfoScalarFieldEnum
    having?: UserInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInfoCountAggregateInputType | true
    _avg?: UserInfoAvgAggregateInputType
    _sum?: UserInfoSumAggregateInputType
    _min?: UserInfoMinAggregateInputType
    _max?: UserInfoMaxAggregateInputType
  }

  export type UserInfoGroupByOutputType = {
    user_id: string
    student_id: string
    house_id: number | null
    matched_user: string | null
    _count: UserInfoCountAggregateOutputType | null
    _avg: UserInfoAvgAggregateOutputType | null
    _sum: UserInfoSumAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  type GetUserInfoGroupByPayload<T extends UserInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
            : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
        }
      >
    >


  export type UserInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    student_id?: boolean
    house_id?: boolean
    matched_user?: boolean
    house?: boolean | UserInfo$houseArgs<ExtArgs>
    hints?: boolean | UserInfo$hintsArgs<ExtArgs>
    _count?: boolean | UserInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInfo"]>



  export type UserInfoSelectScalar = {
    user_id?: boolean
    student_id?: boolean
    house_id?: boolean
    matched_user?: boolean
  }

  export type UserInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "student_id" | "house_id" | "matched_user", ExtArgs["result"]["userInfo"]>
  export type UserInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    house?: boolean | UserInfo$houseArgs<ExtArgs>
    hints?: boolean | UserInfo$hintsArgs<ExtArgs>
    _count?: boolean | UserInfoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserInfo"
    objects: {
      house: Prisma.$HouseInfoPayload<ExtArgs> | null
      hints: Prisma.$HintPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      student_id: string
      house_id: number | null
      matched_user: string | null
    }, ExtArgs["result"]["userInfo"]>
    composites: {}
  }

  type UserInfoGetPayload<S extends boolean | null | undefined | UserInfoDefaultArgs> = $Result.GetResult<Prisma.$UserInfoPayload, S>

  type UserInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserInfoCountAggregateInputType | true
    }

  export interface UserInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserInfo'], meta: { name: 'UserInfo' } }
    /**
     * Find zero or one UserInfo that matches the filter.
     * @param {UserInfoFindUniqueArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserInfoFindUniqueArgs>(args: SelectSubset<T, UserInfoFindUniqueArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserInfoFindUniqueOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, UserInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserInfoFindFirstArgs>(args?: SelectSubset<T, UserInfoFindFirstArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, UserInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInfos
     * const userInfos = await prisma.userInfo.findMany()
     * 
     * // Get first 10 UserInfos
     * const userInfos = await prisma.userInfo.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userInfoWithUser_idOnly = await prisma.userInfo.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserInfoFindManyArgs>(args?: SelectSubset<T, UserInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserInfo.
     * @param {UserInfoCreateArgs} args - Arguments to create a UserInfo.
     * @example
     * // Create one UserInfo
     * const UserInfo = await prisma.userInfo.create({
     *   data: {
     *     // ... data to create a UserInfo
     *   }
     * })
     * 
     */
    create<T extends UserInfoCreateArgs>(args: SelectSubset<T, UserInfoCreateArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserInfos.
     * @param {UserInfoCreateManyArgs} args - Arguments to create many UserInfos.
     * @example
     * // Create many UserInfos
     * const userInfo = await prisma.userInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserInfoCreateManyArgs>(args?: SelectSubset<T, UserInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserInfo.
     * @param {UserInfoDeleteArgs} args - Arguments to delete one UserInfo.
     * @example
     * // Delete one UserInfo
     * const UserInfo = await prisma.userInfo.delete({
     *   where: {
     *     // ... filter to delete one UserInfo
     *   }
     * })
     * 
     */
    delete<T extends UserInfoDeleteArgs>(args: SelectSubset<T, UserInfoDeleteArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserInfo.
     * @param {UserInfoUpdateArgs} args - Arguments to update one UserInfo.
     * @example
     * // Update one UserInfo
     * const userInfo = await prisma.userInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserInfoUpdateArgs>(args: SelectSubset<T, UserInfoUpdateArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserInfos.
     * @param {UserInfoDeleteManyArgs} args - Arguments to filter UserInfos to delete.
     * @example
     * // Delete a few UserInfos
     * const { count } = await prisma.userInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserInfoDeleteManyArgs>(args?: SelectSubset<T, UserInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInfos
     * const userInfo = await prisma.userInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserInfoUpdateManyArgs>(args: SelectSubset<T, UserInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserInfo.
     * @param {UserInfoUpsertArgs} args - Arguments to update or create a UserInfo.
     * @example
     * // Update or create a UserInfo
     * const userInfo = await prisma.userInfo.upsert({
     *   create: {
     *     // ... data to create a UserInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInfo we want to update
     *   }
     * })
     */
    upsert<T extends UserInfoUpsertArgs>(args: SelectSubset<T, UserInfoUpsertArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoCountArgs} args - Arguments to filter UserInfos to count.
     * @example
     * // Count the number of UserInfos
     * const count = await prisma.userInfo.count({
     *   where: {
     *     // ... the filter for the UserInfos we want to count
     *   }
     * })
    **/
    count<T extends UserInfoCountArgs>(
      args?: Subset<T, UserInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserInfoAggregateArgs>(args: Subset<T, UserInfoAggregateArgs>): Prisma.PrismaPromise<GetUserInfoAggregateType<T>>

    /**
     * Group by UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoGroupByArgs} args - Group by arguments.
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
      T extends UserInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInfoGroupByArgs['orderBy'] }
        : { orderBy?: UserInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserInfo model
   */
  readonly fields: UserInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    house<T extends UserInfo$houseArgs<ExtArgs> = {}>(args?: Subset<T, UserInfo$houseArgs<ExtArgs>>): Prisma__HouseInfoClient<$Result.GetResult<Prisma.$HouseInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    hints<T extends UserInfo$hintsArgs<ExtArgs> = {}>(args?: Subset<T, UserInfo$hintsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserInfo model
   */
  interface UserInfoFieldRefs {
    readonly user_id: FieldRef<"UserInfo", 'String'>
    readonly student_id: FieldRef<"UserInfo", 'String'>
    readonly house_id: FieldRef<"UserInfo", 'Int'>
    readonly matched_user: FieldRef<"UserInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserInfo findUnique
   */
  export type UserInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findUniqueOrThrow
   */
  export type UserInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findFirst
   */
  export type UserInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo findFirstOrThrow
   */
  export type UserInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo findMany
   */
  export type UserInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfos to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo create
   */
  export type UserInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a UserInfo.
     */
    data: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
  }

  /**
   * UserInfo createMany
   */
  export type UserInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserInfos.
     */
    data: UserInfoCreateManyInput | UserInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserInfo update
   */
  export type UserInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a UserInfo.
     */
    data: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
    /**
     * Choose, which UserInfo to update.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo updateMany
   */
  export type UserInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserInfos.
     */
    data: XOR<UserInfoUpdateManyMutationInput, UserInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserInfos to update
     */
    where?: UserInfoWhereInput
    /**
     * Limit how many UserInfos to update.
     */
    limit?: number
  }

  /**
   * UserInfo upsert
   */
  export type UserInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the UserInfo to update in case it exists.
     */
    where: UserInfoWhereUniqueInput
    /**
     * In case the UserInfo found by the `where` argument doesn't exist, create a new UserInfo with this data.
     */
    create: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
    /**
     * In case the UserInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
  }

  /**
   * UserInfo delete
   */
  export type UserInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter which UserInfo to delete.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo deleteMany
   */
  export type UserInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInfos to delete
     */
    where?: UserInfoWhereInput
    /**
     * Limit how many UserInfos to delete.
     */
    limit?: number
  }

  /**
   * UserInfo.house
   */
  export type UserInfo$houseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseInfo
     */
    select?: HouseInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseInfo
     */
    omit?: HouseInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInfoInclude<ExtArgs> | null
    where?: HouseInfoWhereInput
  }

  /**
   * UserInfo.hints
   */
  export type UserInfo$hintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    where?: HintWhereInput
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    cursor?: HintWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[]
  }

  /**
   * UserInfo without action
   */
  export type UserInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
  }


  /**
   * Model HouseInfo
   */

  export type AggregateHouseInfo = {
    _count: HouseInfoCountAggregateOutputType | null
    _avg: HouseInfoAvgAggregateOutputType | null
    _sum: HouseInfoSumAggregateOutputType | null
    _min: HouseInfoMinAggregateOutputType | null
    _max: HouseInfoMaxAggregateOutputType | null
  }

  export type HouseInfoAvgAggregateOutputType = {
    house_id: number | null
  }

  export type HouseInfoSumAggregateOutputType = {
    house_id: number | null
  }

  export type HouseInfoMinAggregateOutputType = {
    house_id: number | null
    house_name: string | null
    color: string | null
  }

  export type HouseInfoMaxAggregateOutputType = {
    house_id: number | null
    house_name: string | null
    color: string | null
  }

  export type HouseInfoCountAggregateOutputType = {
    house_id: number
    house_name: number
    color: number
    _all: number
  }


  export type HouseInfoAvgAggregateInputType = {
    house_id?: true
  }

  export type HouseInfoSumAggregateInputType = {
    house_id?: true
  }

  export type HouseInfoMinAggregateInputType = {
    house_id?: true
    house_name?: true
    color?: true
  }

  export type HouseInfoMaxAggregateInputType = {
    house_id?: true
    house_name?: true
    color?: true
  }

  export type HouseInfoCountAggregateInputType = {
    house_id?: true
    house_name?: true
    color?: true
    _all?: true
  }

  export type HouseInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HouseInfo to aggregate.
     */
    where?: HouseInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseInfos to fetch.
     */
    orderBy?: HouseInfoOrderByWithRelationInput | HouseInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HouseInfos
    **/
    _count?: true | HouseInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HouseInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HouseInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseInfoMaxAggregateInputType
  }

  export type GetHouseInfoAggregateType<T extends HouseInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateHouseInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHouseInfo[P]>
      : GetScalarType<T[P], AggregateHouseInfo[P]>
  }




  export type HouseInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseInfoWhereInput
    orderBy?: HouseInfoOrderByWithAggregationInput | HouseInfoOrderByWithAggregationInput[]
    by: HouseInfoScalarFieldEnum[] | HouseInfoScalarFieldEnum
    having?: HouseInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseInfoCountAggregateInputType | true
    _avg?: HouseInfoAvgAggregateInputType
    _sum?: HouseInfoSumAggregateInputType
    _min?: HouseInfoMinAggregateInputType
    _max?: HouseInfoMaxAggregateInputType
  }

  export type HouseInfoGroupByOutputType = {
    house_id: number
    house_name: string
    color: string
    _count: HouseInfoCountAggregateOutputType | null
    _avg: HouseInfoAvgAggregateOutputType | null
    _sum: HouseInfoSumAggregateOutputType | null
    _min: HouseInfoMinAggregateOutputType | null
    _max: HouseInfoMaxAggregateOutputType | null
  }

  type GetHouseInfoGroupByPayload<T extends HouseInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseInfoGroupByOutputType[P]>
            : GetScalarType<T[P], HouseInfoGroupByOutputType[P]>
        }
      >
    >


  export type HouseInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    house_id?: boolean
    house_name?: boolean
    color?: boolean
    users?: boolean | HouseInfo$usersArgs<ExtArgs>
    _count?: boolean | HouseInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["houseInfo"]>



  export type HouseInfoSelectScalar = {
    house_id?: boolean
    house_name?: boolean
    color?: boolean
  }

  export type HouseInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"house_id" | "house_name" | "color", ExtArgs["result"]["houseInfo"]>
  export type HouseInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | HouseInfo$usersArgs<ExtArgs>
    _count?: boolean | HouseInfoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HouseInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HouseInfo"
    objects: {
      users: Prisma.$UserInfoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      house_id: number
      house_name: string
      color: string
    }, ExtArgs["result"]["houseInfo"]>
    composites: {}
  }

  type HouseInfoGetPayload<S extends boolean | null | undefined | HouseInfoDefaultArgs> = $Result.GetResult<Prisma.$HouseInfoPayload, S>

  type HouseInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseInfoCountAggregateInputType | true
    }

  export interface HouseInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HouseInfo'], meta: { name: 'HouseInfo' } }
    /**
     * Find zero or one HouseInfo that matches the filter.
     * @param {HouseInfoFindUniqueArgs} args - Arguments to find a HouseInfo
     * @example
     * // Get one HouseInfo
     * const houseInfo = await prisma.houseInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseInfoFindUniqueArgs>(args: SelectSubset<T, HouseInfoFindUniqueArgs<ExtArgs>>): Prisma__HouseInfoClient<$Result.GetResult<Prisma.$HouseInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HouseInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseInfoFindUniqueOrThrowArgs} args - Arguments to find a HouseInfo
     * @example
     * // Get one HouseInfo
     * const houseInfo = await prisma.houseInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseInfoClient<$Result.GetResult<Prisma.$HouseInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HouseInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseInfoFindFirstArgs} args - Arguments to find a HouseInfo
     * @example
     * // Get one HouseInfo
     * const houseInfo = await prisma.houseInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseInfoFindFirstArgs>(args?: SelectSubset<T, HouseInfoFindFirstArgs<ExtArgs>>): Prisma__HouseInfoClient<$Result.GetResult<Prisma.$HouseInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HouseInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseInfoFindFirstOrThrowArgs} args - Arguments to find a HouseInfo
     * @example
     * // Get one HouseInfo
     * const houseInfo = await prisma.houseInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseInfoClient<$Result.GetResult<Prisma.$HouseInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HouseInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HouseInfos
     * const houseInfos = await prisma.houseInfo.findMany()
     * 
     * // Get first 10 HouseInfos
     * const houseInfos = await prisma.houseInfo.findMany({ take: 10 })
     * 
     * // Only select the `house_id`
     * const houseInfoWithHouse_idOnly = await prisma.houseInfo.findMany({ select: { house_id: true } })
     * 
     */
    findMany<T extends HouseInfoFindManyArgs>(args?: SelectSubset<T, HouseInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HouseInfo.
     * @param {HouseInfoCreateArgs} args - Arguments to create a HouseInfo.
     * @example
     * // Create one HouseInfo
     * const HouseInfo = await prisma.houseInfo.create({
     *   data: {
     *     // ... data to create a HouseInfo
     *   }
     * })
     * 
     */
    create<T extends HouseInfoCreateArgs>(args: SelectSubset<T, HouseInfoCreateArgs<ExtArgs>>): Prisma__HouseInfoClient<$Result.GetResult<Prisma.$HouseInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HouseInfos.
     * @param {HouseInfoCreateManyArgs} args - Arguments to create many HouseInfos.
     * @example
     * // Create many HouseInfos
     * const houseInfo = await prisma.houseInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseInfoCreateManyArgs>(args?: SelectSubset<T, HouseInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HouseInfo.
     * @param {HouseInfoDeleteArgs} args - Arguments to delete one HouseInfo.
     * @example
     * // Delete one HouseInfo
     * const HouseInfo = await prisma.houseInfo.delete({
     *   where: {
     *     // ... filter to delete one HouseInfo
     *   }
     * })
     * 
     */
    delete<T extends HouseInfoDeleteArgs>(args: SelectSubset<T, HouseInfoDeleteArgs<ExtArgs>>): Prisma__HouseInfoClient<$Result.GetResult<Prisma.$HouseInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HouseInfo.
     * @param {HouseInfoUpdateArgs} args - Arguments to update one HouseInfo.
     * @example
     * // Update one HouseInfo
     * const houseInfo = await prisma.houseInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseInfoUpdateArgs>(args: SelectSubset<T, HouseInfoUpdateArgs<ExtArgs>>): Prisma__HouseInfoClient<$Result.GetResult<Prisma.$HouseInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HouseInfos.
     * @param {HouseInfoDeleteManyArgs} args - Arguments to filter HouseInfos to delete.
     * @example
     * // Delete a few HouseInfos
     * const { count } = await prisma.houseInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseInfoDeleteManyArgs>(args?: SelectSubset<T, HouseInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HouseInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HouseInfos
     * const houseInfo = await prisma.houseInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseInfoUpdateManyArgs>(args: SelectSubset<T, HouseInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HouseInfo.
     * @param {HouseInfoUpsertArgs} args - Arguments to update or create a HouseInfo.
     * @example
     * // Update or create a HouseInfo
     * const houseInfo = await prisma.houseInfo.upsert({
     *   create: {
     *     // ... data to create a HouseInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HouseInfo we want to update
     *   }
     * })
     */
    upsert<T extends HouseInfoUpsertArgs>(args: SelectSubset<T, HouseInfoUpsertArgs<ExtArgs>>): Prisma__HouseInfoClient<$Result.GetResult<Prisma.$HouseInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HouseInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseInfoCountArgs} args - Arguments to filter HouseInfos to count.
     * @example
     * // Count the number of HouseInfos
     * const count = await prisma.houseInfo.count({
     *   where: {
     *     // ... the filter for the HouseInfos we want to count
     *   }
     * })
    **/
    count<T extends HouseInfoCountArgs>(
      args?: Subset<T, HouseInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HouseInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HouseInfoAggregateArgs>(args: Subset<T, HouseInfoAggregateArgs>): Prisma.PrismaPromise<GetHouseInfoAggregateType<T>>

    /**
     * Group by HouseInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseInfoGroupByArgs} args - Group by arguments.
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
      T extends HouseInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseInfoGroupByArgs['orderBy'] }
        : { orderBy?: HouseInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HouseInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HouseInfo model
   */
  readonly fields: HouseInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HouseInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends HouseInfo$usersArgs<ExtArgs> = {}>(args?: Subset<T, HouseInfo$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the HouseInfo model
   */
  interface HouseInfoFieldRefs {
    readonly house_id: FieldRef<"HouseInfo", 'Int'>
    readonly house_name: FieldRef<"HouseInfo", 'String'>
    readonly color: FieldRef<"HouseInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HouseInfo findUnique
   */
  export type HouseInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseInfo
     */
    select?: HouseInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseInfo
     */
    omit?: HouseInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInfoInclude<ExtArgs> | null
    /**
     * Filter, which HouseInfo to fetch.
     */
    where: HouseInfoWhereUniqueInput
  }

  /**
   * HouseInfo findUniqueOrThrow
   */
  export type HouseInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseInfo
     */
    select?: HouseInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseInfo
     */
    omit?: HouseInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInfoInclude<ExtArgs> | null
    /**
     * Filter, which HouseInfo to fetch.
     */
    where: HouseInfoWhereUniqueInput
  }

  /**
   * HouseInfo findFirst
   */
  export type HouseInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseInfo
     */
    select?: HouseInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseInfo
     */
    omit?: HouseInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInfoInclude<ExtArgs> | null
    /**
     * Filter, which HouseInfo to fetch.
     */
    where?: HouseInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseInfos to fetch.
     */
    orderBy?: HouseInfoOrderByWithRelationInput | HouseInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HouseInfos.
     */
    cursor?: HouseInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HouseInfos.
     */
    distinct?: HouseInfoScalarFieldEnum | HouseInfoScalarFieldEnum[]
  }

  /**
   * HouseInfo findFirstOrThrow
   */
  export type HouseInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseInfo
     */
    select?: HouseInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseInfo
     */
    omit?: HouseInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInfoInclude<ExtArgs> | null
    /**
     * Filter, which HouseInfo to fetch.
     */
    where?: HouseInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseInfos to fetch.
     */
    orderBy?: HouseInfoOrderByWithRelationInput | HouseInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HouseInfos.
     */
    cursor?: HouseInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HouseInfos.
     */
    distinct?: HouseInfoScalarFieldEnum | HouseInfoScalarFieldEnum[]
  }

  /**
   * HouseInfo findMany
   */
  export type HouseInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseInfo
     */
    select?: HouseInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseInfo
     */
    omit?: HouseInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInfoInclude<ExtArgs> | null
    /**
     * Filter, which HouseInfos to fetch.
     */
    where?: HouseInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseInfos to fetch.
     */
    orderBy?: HouseInfoOrderByWithRelationInput | HouseInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HouseInfos.
     */
    cursor?: HouseInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseInfos.
     */
    skip?: number
    distinct?: HouseInfoScalarFieldEnum | HouseInfoScalarFieldEnum[]
  }

  /**
   * HouseInfo create
   */
  export type HouseInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseInfo
     */
    select?: HouseInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseInfo
     */
    omit?: HouseInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a HouseInfo.
     */
    data: XOR<HouseInfoCreateInput, HouseInfoUncheckedCreateInput>
  }

  /**
   * HouseInfo createMany
   */
  export type HouseInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HouseInfos.
     */
    data: HouseInfoCreateManyInput | HouseInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HouseInfo update
   */
  export type HouseInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseInfo
     */
    select?: HouseInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseInfo
     */
    omit?: HouseInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a HouseInfo.
     */
    data: XOR<HouseInfoUpdateInput, HouseInfoUncheckedUpdateInput>
    /**
     * Choose, which HouseInfo to update.
     */
    where: HouseInfoWhereUniqueInput
  }

  /**
   * HouseInfo updateMany
   */
  export type HouseInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HouseInfos.
     */
    data: XOR<HouseInfoUpdateManyMutationInput, HouseInfoUncheckedUpdateManyInput>
    /**
     * Filter which HouseInfos to update
     */
    where?: HouseInfoWhereInput
    /**
     * Limit how many HouseInfos to update.
     */
    limit?: number
  }

  /**
   * HouseInfo upsert
   */
  export type HouseInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseInfo
     */
    select?: HouseInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseInfo
     */
    omit?: HouseInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the HouseInfo to update in case it exists.
     */
    where: HouseInfoWhereUniqueInput
    /**
     * In case the HouseInfo found by the `where` argument doesn't exist, create a new HouseInfo with this data.
     */
    create: XOR<HouseInfoCreateInput, HouseInfoUncheckedCreateInput>
    /**
     * In case the HouseInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseInfoUpdateInput, HouseInfoUncheckedUpdateInput>
  }

  /**
   * HouseInfo delete
   */
  export type HouseInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseInfo
     */
    select?: HouseInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseInfo
     */
    omit?: HouseInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInfoInclude<ExtArgs> | null
    /**
     * Filter which HouseInfo to delete.
     */
    where: HouseInfoWhereUniqueInput
  }

  /**
   * HouseInfo deleteMany
   */
  export type HouseInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HouseInfos to delete
     */
    where?: HouseInfoWhereInput
    /**
     * Limit how many HouseInfos to delete.
     */
    limit?: number
  }

  /**
   * HouseInfo.users
   */
  export type HouseInfo$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    where?: UserInfoWhereInput
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    cursor?: UserInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * HouseInfo without action
   */
  export type HouseInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseInfo
     */
    select?: HouseInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseInfo
     */
    omit?: HouseInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInfoInclude<ExtArgs> | null
  }


  /**
   * Model Hint
   */

  export type AggregateHint = {
    _count: HintCountAggregateOutputType | null
    _avg: HintAvgAggregateOutputType | null
    _sum: HintSumAggregateOutputType | null
    _min: HintMinAggregateOutputType | null
    _max: HintMaxAggregateOutputType | null
  }

  export type HintAvgAggregateOutputType = {
    id: number | null
  }

  export type HintSumAggregateOutputType = {
    id: number | null
  }

  export type HintMinAggregateOutputType = {
    id: number | null
    hint: string | null
    user_id: string | null
  }

  export type HintMaxAggregateOutputType = {
    id: number | null
    hint: string | null
    user_id: string | null
  }

  export type HintCountAggregateOutputType = {
    id: number
    hint: number
    user_id: number
    _all: number
  }


  export type HintAvgAggregateInputType = {
    id?: true
  }

  export type HintSumAggregateInputType = {
    id?: true
  }

  export type HintMinAggregateInputType = {
    id?: true
    hint?: true
    user_id?: true
  }

  export type HintMaxAggregateInputType = {
    id?: true
    hint?: true
    user_id?: true
  }

  export type HintCountAggregateInputType = {
    id?: true
    hint?: true
    user_id?: true
    _all?: true
  }

  export type HintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hint to aggregate.
     */
    where?: HintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hints
    **/
    _count?: true | HintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HintAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HintSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HintMaxAggregateInputType
  }

  export type GetHintAggregateType<T extends HintAggregateArgs> = {
        [P in keyof T & keyof AggregateHint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHint[P]>
      : GetScalarType<T[P], AggregateHint[P]>
  }




  export type HintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HintWhereInput
    orderBy?: HintOrderByWithAggregationInput | HintOrderByWithAggregationInput[]
    by: HintScalarFieldEnum[] | HintScalarFieldEnum
    having?: HintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HintCountAggregateInputType | true
    _avg?: HintAvgAggregateInputType
    _sum?: HintSumAggregateInputType
    _min?: HintMinAggregateInputType
    _max?: HintMaxAggregateInputType
  }

  export type HintGroupByOutputType = {
    id: number
    hint: string
    user_id: string
    _count: HintCountAggregateOutputType | null
    _avg: HintAvgAggregateOutputType | null
    _sum: HintSumAggregateOutputType | null
    _min: HintMinAggregateOutputType | null
    _max: HintMaxAggregateOutputType | null
  }

  type GetHintGroupByPayload<T extends HintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HintGroupByOutputType[P]>
            : GetScalarType<T[P], HintGroupByOutputType[P]>
        }
      >
    >


  export type HintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hint?: boolean
    user_id?: boolean
    user?: boolean | UserInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hint"]>



  export type HintSelectScalar = {
    id?: boolean
    hint?: boolean
    user_id?: boolean
  }

  export type HintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hint" | "user_id", ExtArgs["result"]["hint"]>
  export type HintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserInfoDefaultArgs<ExtArgs>
  }

  export type $HintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hint"
    objects: {
      user: Prisma.$UserInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hint: string
      user_id: string
    }, ExtArgs["result"]["hint"]>
    composites: {}
  }

  type HintGetPayload<S extends boolean | null | undefined | HintDefaultArgs> = $Result.GetResult<Prisma.$HintPayload, S>

  type HintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HintCountAggregateInputType | true
    }

  export interface HintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hint'], meta: { name: 'Hint' } }
    /**
     * Find zero or one Hint that matches the filter.
     * @param {HintFindUniqueArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HintFindUniqueArgs>(args: SelectSubset<T, HintFindUniqueArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HintFindUniqueOrThrowArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HintFindUniqueOrThrowArgs>(args: SelectSubset<T, HintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintFindFirstArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HintFindFirstArgs>(args?: SelectSubset<T, HintFindFirstArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintFindFirstOrThrowArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HintFindFirstOrThrowArgs>(args?: SelectSubset<T, HintFindFirstOrThrowArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hints
     * const hints = await prisma.hint.findMany()
     * 
     * // Get first 10 Hints
     * const hints = await prisma.hint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hintWithIdOnly = await prisma.hint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HintFindManyArgs>(args?: SelectSubset<T, HintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hint.
     * @param {HintCreateArgs} args - Arguments to create a Hint.
     * @example
     * // Create one Hint
     * const Hint = await prisma.hint.create({
     *   data: {
     *     // ... data to create a Hint
     *   }
     * })
     * 
     */
    create<T extends HintCreateArgs>(args: SelectSubset<T, HintCreateArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hints.
     * @param {HintCreateManyArgs} args - Arguments to create many Hints.
     * @example
     * // Create many Hints
     * const hint = await prisma.hint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HintCreateManyArgs>(args?: SelectSubset<T, HintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hint.
     * @param {HintDeleteArgs} args - Arguments to delete one Hint.
     * @example
     * // Delete one Hint
     * const Hint = await prisma.hint.delete({
     *   where: {
     *     // ... filter to delete one Hint
     *   }
     * })
     * 
     */
    delete<T extends HintDeleteArgs>(args: SelectSubset<T, HintDeleteArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hint.
     * @param {HintUpdateArgs} args - Arguments to update one Hint.
     * @example
     * // Update one Hint
     * const hint = await prisma.hint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HintUpdateArgs>(args: SelectSubset<T, HintUpdateArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hints.
     * @param {HintDeleteManyArgs} args - Arguments to filter Hints to delete.
     * @example
     * // Delete a few Hints
     * const { count } = await prisma.hint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HintDeleteManyArgs>(args?: SelectSubset<T, HintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hints
     * const hint = await prisma.hint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HintUpdateManyArgs>(args: SelectSubset<T, HintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hint.
     * @param {HintUpsertArgs} args - Arguments to update or create a Hint.
     * @example
     * // Update or create a Hint
     * const hint = await prisma.hint.upsert({
     *   create: {
     *     // ... data to create a Hint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hint we want to update
     *   }
     * })
     */
    upsert<T extends HintUpsertArgs>(args: SelectSubset<T, HintUpsertArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintCountArgs} args - Arguments to filter Hints to count.
     * @example
     * // Count the number of Hints
     * const count = await prisma.hint.count({
     *   where: {
     *     // ... the filter for the Hints we want to count
     *   }
     * })
    **/
    count<T extends HintCountArgs>(
      args?: Subset<T, HintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HintAggregateArgs>(args: Subset<T, HintAggregateArgs>): Prisma.PrismaPromise<GetHintAggregateType<T>>

    /**
     * Group by Hint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintGroupByArgs} args - Group by arguments.
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
      T extends HintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HintGroupByArgs['orderBy'] }
        : { orderBy?: HintGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hint model
   */
  readonly fields: HintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserInfoDefaultArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Hint model
   */
  interface HintFieldRefs {
    readonly id: FieldRef<"Hint", 'Int'>
    readonly hint: FieldRef<"Hint", 'String'>
    readonly user_id: FieldRef<"Hint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hint findUnique
   */
  export type HintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hint to fetch.
     */
    where: HintWhereUniqueInput
  }

  /**
   * Hint findUniqueOrThrow
   */
  export type HintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hint to fetch.
     */
    where: HintWhereUniqueInput
  }

  /**
   * Hint findFirst
   */
  export type HintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hint to fetch.
     */
    where?: HintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hints.
     */
    cursor?: HintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hints.
     */
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[]
  }

  /**
   * Hint findFirstOrThrow
   */
  export type HintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hint to fetch.
     */
    where?: HintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hints.
     */
    cursor?: HintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hints.
     */
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[]
  }

  /**
   * Hint findMany
   */
  export type HintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hints to fetch.
     */
    where?: HintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hints.
     */
    cursor?: HintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hints.
     */
    skip?: number
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[]
  }

  /**
   * Hint create
   */
  export type HintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * The data needed to create a Hint.
     */
    data: XOR<HintCreateInput, HintUncheckedCreateInput>
  }

  /**
   * Hint createMany
   */
  export type HintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hints.
     */
    data: HintCreateManyInput | HintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hint update
   */
  export type HintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * The data needed to update a Hint.
     */
    data: XOR<HintUpdateInput, HintUncheckedUpdateInput>
    /**
     * Choose, which Hint to update.
     */
    where: HintWhereUniqueInput
  }

  /**
   * Hint updateMany
   */
  export type HintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hints.
     */
    data: XOR<HintUpdateManyMutationInput, HintUncheckedUpdateManyInput>
    /**
     * Filter which Hints to update
     */
    where?: HintWhereInput
    /**
     * Limit how many Hints to update.
     */
    limit?: number
  }

  /**
   * Hint upsert
   */
  export type HintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * The filter to search for the Hint to update in case it exists.
     */
    where: HintWhereUniqueInput
    /**
     * In case the Hint found by the `where` argument doesn't exist, create a new Hint with this data.
     */
    create: XOR<HintCreateInput, HintUncheckedCreateInput>
    /**
     * In case the Hint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HintUpdateInput, HintUncheckedUpdateInput>
  }

  /**
   * Hint delete
   */
  export type HintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter which Hint to delete.
     */
    where: HintWhereUniqueInput
  }

  /**
   * Hint deleteMany
   */
  export type HintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hints to delete
     */
    where?: HintWhereInput
    /**
     * Limit how many Hints to delete.
     */
    limit?: number
  }

  /**
   * Hint without action
   */
  export type HintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
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


  export const UserInfoScalarFieldEnum: {
    user_id: 'user_id',
    student_id: 'student_id',
    house_id: 'house_id',
    matched_user: 'matched_user'
  };

  export type UserInfoScalarFieldEnum = (typeof UserInfoScalarFieldEnum)[keyof typeof UserInfoScalarFieldEnum]


  export const HouseInfoScalarFieldEnum: {
    house_id: 'house_id',
    house_name: 'house_name',
    color: 'color'
  };

  export type HouseInfoScalarFieldEnum = (typeof HouseInfoScalarFieldEnum)[keyof typeof HouseInfoScalarFieldEnum]


  export const HintScalarFieldEnum: {
    id: 'id',
    hint: 'hint',
    user_id: 'user_id'
  };

  export type HintScalarFieldEnum = (typeof HintScalarFieldEnum)[keyof typeof HintScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserInfoOrderByRelevanceFieldEnum: {
    user_id: 'user_id',
    student_id: 'student_id',
    matched_user: 'matched_user'
  };

  export type UserInfoOrderByRelevanceFieldEnum = (typeof UserInfoOrderByRelevanceFieldEnum)[keyof typeof UserInfoOrderByRelevanceFieldEnum]


  export const HouseInfoOrderByRelevanceFieldEnum: {
    house_name: 'house_name',
    color: 'color'
  };

  export type HouseInfoOrderByRelevanceFieldEnum = (typeof HouseInfoOrderByRelevanceFieldEnum)[keyof typeof HouseInfoOrderByRelevanceFieldEnum]


  export const HintOrderByRelevanceFieldEnum: {
    hint: 'hint',
    user_id: 'user_id'
  };

  export type HintOrderByRelevanceFieldEnum = (typeof HintOrderByRelevanceFieldEnum)[keyof typeof HintOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserInfoWhereInput = {
    AND?: UserInfoWhereInput | UserInfoWhereInput[]
    OR?: UserInfoWhereInput[]
    NOT?: UserInfoWhereInput | UserInfoWhereInput[]
    user_id?: StringFilter<"UserInfo"> | string
    student_id?: StringFilter<"UserInfo"> | string
    house_id?: IntNullableFilter<"UserInfo"> | number | null
    matched_user?: StringNullableFilter<"UserInfo"> | string | null
    house?: XOR<HouseInfoNullableScalarRelationFilter, HouseInfoWhereInput> | null
    hints?: HintListRelationFilter
  }

  export type UserInfoOrderByWithRelationInput = {
    user_id?: SortOrder
    student_id?: SortOrder
    house_id?: SortOrderInput | SortOrder
    matched_user?: SortOrderInput | SortOrder
    house?: HouseInfoOrderByWithRelationInput
    hints?: HintOrderByRelationAggregateInput
    _relevance?: UserInfoOrderByRelevanceInput
  }

  export type UserInfoWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    student_id?: string
    AND?: UserInfoWhereInput | UserInfoWhereInput[]
    OR?: UserInfoWhereInput[]
    NOT?: UserInfoWhereInput | UserInfoWhereInput[]
    house_id?: IntNullableFilter<"UserInfo"> | number | null
    matched_user?: StringNullableFilter<"UserInfo"> | string | null
    house?: XOR<HouseInfoNullableScalarRelationFilter, HouseInfoWhereInput> | null
    hints?: HintListRelationFilter
  }, "user_id" | "student_id">

  export type UserInfoOrderByWithAggregationInput = {
    user_id?: SortOrder
    student_id?: SortOrder
    house_id?: SortOrderInput | SortOrder
    matched_user?: SortOrderInput | SortOrder
    _count?: UserInfoCountOrderByAggregateInput
    _avg?: UserInfoAvgOrderByAggregateInput
    _max?: UserInfoMaxOrderByAggregateInput
    _min?: UserInfoMinOrderByAggregateInput
    _sum?: UserInfoSumOrderByAggregateInput
  }

  export type UserInfoScalarWhereWithAggregatesInput = {
    AND?: UserInfoScalarWhereWithAggregatesInput | UserInfoScalarWhereWithAggregatesInput[]
    OR?: UserInfoScalarWhereWithAggregatesInput[]
    NOT?: UserInfoScalarWhereWithAggregatesInput | UserInfoScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"UserInfo"> | string
    student_id?: StringWithAggregatesFilter<"UserInfo"> | string
    house_id?: IntNullableWithAggregatesFilter<"UserInfo"> | number | null
    matched_user?: StringNullableWithAggregatesFilter<"UserInfo"> | string | null
  }

  export type HouseInfoWhereInput = {
    AND?: HouseInfoWhereInput | HouseInfoWhereInput[]
    OR?: HouseInfoWhereInput[]
    NOT?: HouseInfoWhereInput | HouseInfoWhereInput[]
    house_id?: IntFilter<"HouseInfo"> | number
    house_name?: StringFilter<"HouseInfo"> | string
    color?: StringFilter<"HouseInfo"> | string
    users?: UserInfoListRelationFilter
  }

  export type HouseInfoOrderByWithRelationInput = {
    house_id?: SortOrder
    house_name?: SortOrder
    color?: SortOrder
    users?: UserInfoOrderByRelationAggregateInput
    _relevance?: HouseInfoOrderByRelevanceInput
  }

  export type HouseInfoWhereUniqueInput = Prisma.AtLeast<{
    house_id?: number
    AND?: HouseInfoWhereInput | HouseInfoWhereInput[]
    OR?: HouseInfoWhereInput[]
    NOT?: HouseInfoWhereInput | HouseInfoWhereInput[]
    house_name?: StringFilter<"HouseInfo"> | string
    color?: StringFilter<"HouseInfo"> | string
    users?: UserInfoListRelationFilter
  }, "house_id">

  export type HouseInfoOrderByWithAggregationInput = {
    house_id?: SortOrder
    house_name?: SortOrder
    color?: SortOrder
    _count?: HouseInfoCountOrderByAggregateInput
    _avg?: HouseInfoAvgOrderByAggregateInput
    _max?: HouseInfoMaxOrderByAggregateInput
    _min?: HouseInfoMinOrderByAggregateInput
    _sum?: HouseInfoSumOrderByAggregateInput
  }

  export type HouseInfoScalarWhereWithAggregatesInput = {
    AND?: HouseInfoScalarWhereWithAggregatesInput | HouseInfoScalarWhereWithAggregatesInput[]
    OR?: HouseInfoScalarWhereWithAggregatesInput[]
    NOT?: HouseInfoScalarWhereWithAggregatesInput | HouseInfoScalarWhereWithAggregatesInput[]
    house_id?: IntWithAggregatesFilter<"HouseInfo"> | number
    house_name?: StringWithAggregatesFilter<"HouseInfo"> | string
    color?: StringWithAggregatesFilter<"HouseInfo"> | string
  }

  export type HintWhereInput = {
    AND?: HintWhereInput | HintWhereInput[]
    OR?: HintWhereInput[]
    NOT?: HintWhereInput | HintWhereInput[]
    id?: IntFilter<"Hint"> | number
    hint?: StringFilter<"Hint"> | string
    user_id?: StringFilter<"Hint"> | string
    user?: XOR<UserInfoScalarRelationFilter, UserInfoWhereInput>
  }

  export type HintOrderByWithRelationInput = {
    id?: SortOrder
    hint?: SortOrder
    user_id?: SortOrder
    user?: UserInfoOrderByWithRelationInput
    _relevance?: HintOrderByRelevanceInput
  }

  export type HintWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HintWhereInput | HintWhereInput[]
    OR?: HintWhereInput[]
    NOT?: HintWhereInput | HintWhereInput[]
    hint?: StringFilter<"Hint"> | string
    user_id?: StringFilter<"Hint"> | string
    user?: XOR<UserInfoScalarRelationFilter, UserInfoWhereInput>
  }, "id">

  export type HintOrderByWithAggregationInput = {
    id?: SortOrder
    hint?: SortOrder
    user_id?: SortOrder
    _count?: HintCountOrderByAggregateInput
    _avg?: HintAvgOrderByAggregateInput
    _max?: HintMaxOrderByAggregateInput
    _min?: HintMinOrderByAggregateInput
    _sum?: HintSumOrderByAggregateInput
  }

  export type HintScalarWhereWithAggregatesInput = {
    AND?: HintScalarWhereWithAggregatesInput | HintScalarWhereWithAggregatesInput[]
    OR?: HintScalarWhereWithAggregatesInput[]
    NOT?: HintScalarWhereWithAggregatesInput | HintScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hint"> | number
    hint?: StringWithAggregatesFilter<"Hint"> | string
    user_id?: StringWithAggregatesFilter<"Hint"> | string
  }

  export type UserInfoCreateInput = {
    user_id: string
    student_id: string
    matched_user?: string | null
    house?: HouseInfoCreateNestedOneWithoutUsersInput
    hints?: HintCreateNestedManyWithoutUserInput
  }

  export type UserInfoUncheckedCreateInput = {
    user_id: string
    student_id: string
    house_id?: number | null
    matched_user?: string | null
    hints?: HintUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserInfoUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    matched_user?: NullableStringFieldUpdateOperationsInput | string | null
    house?: HouseInfoUpdateOneWithoutUsersNestedInput
    hints?: HintUpdateManyWithoutUserNestedInput
  }

  export type UserInfoUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    house_id?: NullableIntFieldUpdateOperationsInput | number | null
    matched_user?: NullableStringFieldUpdateOperationsInput | string | null
    hints?: HintUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserInfoCreateManyInput = {
    user_id: string
    student_id: string
    house_id?: number | null
    matched_user?: string | null
  }

  export type UserInfoUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    matched_user?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserInfoUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    house_id?: NullableIntFieldUpdateOperationsInput | number | null
    matched_user?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HouseInfoCreateInput = {
    house_name: string
    color: string
    users?: UserInfoCreateNestedManyWithoutHouseInput
  }

  export type HouseInfoUncheckedCreateInput = {
    house_id?: number
    house_name: string
    color: string
    users?: UserInfoUncheckedCreateNestedManyWithoutHouseInput
  }

  export type HouseInfoUpdateInput = {
    house_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    users?: UserInfoUpdateManyWithoutHouseNestedInput
  }

  export type HouseInfoUncheckedUpdateInput = {
    house_id?: IntFieldUpdateOperationsInput | number
    house_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    users?: UserInfoUncheckedUpdateManyWithoutHouseNestedInput
  }

  export type HouseInfoCreateManyInput = {
    house_id?: number
    house_name: string
    color: string
  }

  export type HouseInfoUpdateManyMutationInput = {
    house_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type HouseInfoUncheckedUpdateManyInput = {
    house_id?: IntFieldUpdateOperationsInput | number
    house_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type HintCreateInput = {
    hint: string
    user: UserInfoCreateNestedOneWithoutHintsInput
  }

  export type HintUncheckedCreateInput = {
    id?: number
    hint: string
    user_id: string
  }

  export type HintUpdateInput = {
    hint?: StringFieldUpdateOperationsInput | string
    user?: UserInfoUpdateOneRequiredWithoutHintsNestedInput
  }

  export type HintUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hint?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type HintCreateManyInput = {
    id?: number
    hint: string
    user_id: string
  }

  export type HintUpdateManyMutationInput = {
    hint?: StringFieldUpdateOperationsInput | string
  }

  export type HintUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hint?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type HouseInfoNullableScalarRelationFilter = {
    is?: HouseInfoWhereInput | null
    isNot?: HouseInfoWhereInput | null
  }

  export type HintListRelationFilter = {
    every?: HintWhereInput
    some?: HintWhereInput
    none?: HintWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HintOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserInfoOrderByRelevanceInput = {
    fields: UserInfoOrderByRelevanceFieldEnum | UserInfoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserInfoCountOrderByAggregateInput = {
    user_id?: SortOrder
    student_id?: SortOrder
    house_id?: SortOrder
    matched_user?: SortOrder
  }

  export type UserInfoAvgOrderByAggregateInput = {
    house_id?: SortOrder
  }

  export type UserInfoMaxOrderByAggregateInput = {
    user_id?: SortOrder
    student_id?: SortOrder
    house_id?: SortOrder
    matched_user?: SortOrder
  }

  export type UserInfoMinOrderByAggregateInput = {
    user_id?: SortOrder
    student_id?: SortOrder
    house_id?: SortOrder
    matched_user?: SortOrder
  }

  export type UserInfoSumOrderByAggregateInput = {
    house_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserInfoListRelationFilter = {
    every?: UserInfoWhereInput
    some?: UserInfoWhereInput
    none?: UserInfoWhereInput
  }

  export type UserInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HouseInfoOrderByRelevanceInput = {
    fields: HouseInfoOrderByRelevanceFieldEnum | HouseInfoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HouseInfoCountOrderByAggregateInput = {
    house_id?: SortOrder
    house_name?: SortOrder
    color?: SortOrder
  }

  export type HouseInfoAvgOrderByAggregateInput = {
    house_id?: SortOrder
  }

  export type HouseInfoMaxOrderByAggregateInput = {
    house_id?: SortOrder
    house_name?: SortOrder
    color?: SortOrder
  }

  export type HouseInfoMinOrderByAggregateInput = {
    house_id?: SortOrder
    house_name?: SortOrder
    color?: SortOrder
  }

  export type HouseInfoSumOrderByAggregateInput = {
    house_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type UserInfoScalarRelationFilter = {
    is?: UserInfoWhereInput
    isNot?: UserInfoWhereInput
  }

  export type HintOrderByRelevanceInput = {
    fields: HintOrderByRelevanceFieldEnum | HintOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HintCountOrderByAggregateInput = {
    id?: SortOrder
    hint?: SortOrder
    user_id?: SortOrder
  }

  export type HintAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HintMaxOrderByAggregateInput = {
    id?: SortOrder
    hint?: SortOrder
    user_id?: SortOrder
  }

  export type HintMinOrderByAggregateInput = {
    id?: SortOrder
    hint?: SortOrder
    user_id?: SortOrder
  }

  export type HintSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HouseInfoCreateNestedOneWithoutUsersInput = {
    create?: XOR<HouseInfoCreateWithoutUsersInput, HouseInfoUncheckedCreateWithoutUsersInput>
    connectOrCreate?: HouseInfoCreateOrConnectWithoutUsersInput
    connect?: HouseInfoWhereUniqueInput
  }

  export type HintCreateNestedManyWithoutUserInput = {
    create?: XOR<HintCreateWithoutUserInput, HintUncheckedCreateWithoutUserInput> | HintCreateWithoutUserInput[] | HintUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HintCreateOrConnectWithoutUserInput | HintCreateOrConnectWithoutUserInput[]
    createMany?: HintCreateManyUserInputEnvelope
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[]
  }

  export type HintUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HintCreateWithoutUserInput, HintUncheckedCreateWithoutUserInput> | HintCreateWithoutUserInput[] | HintUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HintCreateOrConnectWithoutUserInput | HintCreateOrConnectWithoutUserInput[]
    createMany?: HintCreateManyUserInputEnvelope
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type HouseInfoUpdateOneWithoutUsersNestedInput = {
    create?: XOR<HouseInfoCreateWithoutUsersInput, HouseInfoUncheckedCreateWithoutUsersInput>
    connectOrCreate?: HouseInfoCreateOrConnectWithoutUsersInput
    upsert?: HouseInfoUpsertWithoutUsersInput
    disconnect?: HouseInfoWhereInput | boolean
    delete?: HouseInfoWhereInput | boolean
    connect?: HouseInfoWhereUniqueInput
    update?: XOR<XOR<HouseInfoUpdateToOneWithWhereWithoutUsersInput, HouseInfoUpdateWithoutUsersInput>, HouseInfoUncheckedUpdateWithoutUsersInput>
  }

  export type HintUpdateManyWithoutUserNestedInput = {
    create?: XOR<HintCreateWithoutUserInput, HintUncheckedCreateWithoutUserInput> | HintCreateWithoutUserInput[] | HintUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HintCreateOrConnectWithoutUserInput | HintCreateOrConnectWithoutUserInput[]
    upsert?: HintUpsertWithWhereUniqueWithoutUserInput | HintUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HintCreateManyUserInputEnvelope
    set?: HintWhereUniqueInput | HintWhereUniqueInput[]
    disconnect?: HintWhereUniqueInput | HintWhereUniqueInput[]
    delete?: HintWhereUniqueInput | HintWhereUniqueInput[]
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[]
    update?: HintUpdateWithWhereUniqueWithoutUserInput | HintUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HintUpdateManyWithWhereWithoutUserInput | HintUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HintScalarWhereInput | HintScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HintUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HintCreateWithoutUserInput, HintUncheckedCreateWithoutUserInput> | HintCreateWithoutUserInput[] | HintUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HintCreateOrConnectWithoutUserInput | HintCreateOrConnectWithoutUserInput[]
    upsert?: HintUpsertWithWhereUniqueWithoutUserInput | HintUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HintCreateManyUserInputEnvelope
    set?: HintWhereUniqueInput | HintWhereUniqueInput[]
    disconnect?: HintWhereUniqueInput | HintWhereUniqueInput[]
    delete?: HintWhereUniqueInput | HintWhereUniqueInput[]
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[]
    update?: HintUpdateWithWhereUniqueWithoutUserInput | HintUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HintUpdateManyWithWhereWithoutUserInput | HintUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HintScalarWhereInput | HintScalarWhereInput[]
  }

  export type UserInfoCreateNestedManyWithoutHouseInput = {
    create?: XOR<UserInfoCreateWithoutHouseInput, UserInfoUncheckedCreateWithoutHouseInput> | UserInfoCreateWithoutHouseInput[] | UserInfoUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: UserInfoCreateOrConnectWithoutHouseInput | UserInfoCreateOrConnectWithoutHouseInput[]
    createMany?: UserInfoCreateManyHouseInputEnvelope
    connect?: UserInfoWhereUniqueInput | UserInfoWhereUniqueInput[]
  }

  export type UserInfoUncheckedCreateNestedManyWithoutHouseInput = {
    create?: XOR<UserInfoCreateWithoutHouseInput, UserInfoUncheckedCreateWithoutHouseInput> | UserInfoCreateWithoutHouseInput[] | UserInfoUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: UserInfoCreateOrConnectWithoutHouseInput | UserInfoCreateOrConnectWithoutHouseInput[]
    createMany?: UserInfoCreateManyHouseInputEnvelope
    connect?: UserInfoWhereUniqueInput | UserInfoWhereUniqueInput[]
  }

  export type UserInfoUpdateManyWithoutHouseNestedInput = {
    create?: XOR<UserInfoCreateWithoutHouseInput, UserInfoUncheckedCreateWithoutHouseInput> | UserInfoCreateWithoutHouseInput[] | UserInfoUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: UserInfoCreateOrConnectWithoutHouseInput | UserInfoCreateOrConnectWithoutHouseInput[]
    upsert?: UserInfoUpsertWithWhereUniqueWithoutHouseInput | UserInfoUpsertWithWhereUniqueWithoutHouseInput[]
    createMany?: UserInfoCreateManyHouseInputEnvelope
    set?: UserInfoWhereUniqueInput | UserInfoWhereUniqueInput[]
    disconnect?: UserInfoWhereUniqueInput | UserInfoWhereUniqueInput[]
    delete?: UserInfoWhereUniqueInput | UserInfoWhereUniqueInput[]
    connect?: UserInfoWhereUniqueInput | UserInfoWhereUniqueInput[]
    update?: UserInfoUpdateWithWhereUniqueWithoutHouseInput | UserInfoUpdateWithWhereUniqueWithoutHouseInput[]
    updateMany?: UserInfoUpdateManyWithWhereWithoutHouseInput | UserInfoUpdateManyWithWhereWithoutHouseInput[]
    deleteMany?: UserInfoScalarWhereInput | UserInfoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserInfoUncheckedUpdateManyWithoutHouseNestedInput = {
    create?: XOR<UserInfoCreateWithoutHouseInput, UserInfoUncheckedCreateWithoutHouseInput> | UserInfoCreateWithoutHouseInput[] | UserInfoUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: UserInfoCreateOrConnectWithoutHouseInput | UserInfoCreateOrConnectWithoutHouseInput[]
    upsert?: UserInfoUpsertWithWhereUniqueWithoutHouseInput | UserInfoUpsertWithWhereUniqueWithoutHouseInput[]
    createMany?: UserInfoCreateManyHouseInputEnvelope
    set?: UserInfoWhereUniqueInput | UserInfoWhereUniqueInput[]
    disconnect?: UserInfoWhereUniqueInput | UserInfoWhereUniqueInput[]
    delete?: UserInfoWhereUniqueInput | UserInfoWhereUniqueInput[]
    connect?: UserInfoWhereUniqueInput | UserInfoWhereUniqueInput[]
    update?: UserInfoUpdateWithWhereUniqueWithoutHouseInput | UserInfoUpdateWithWhereUniqueWithoutHouseInput[]
    updateMany?: UserInfoUpdateManyWithWhereWithoutHouseInput | UserInfoUpdateManyWithWhereWithoutHouseInput[]
    deleteMany?: UserInfoScalarWhereInput | UserInfoScalarWhereInput[]
  }

  export type UserInfoCreateNestedOneWithoutHintsInput = {
    create?: XOR<UserInfoCreateWithoutHintsInput, UserInfoUncheckedCreateWithoutHintsInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutHintsInput
    connect?: UserInfoWhereUniqueInput
  }

  export type UserInfoUpdateOneRequiredWithoutHintsNestedInput = {
    create?: XOR<UserInfoCreateWithoutHintsInput, UserInfoUncheckedCreateWithoutHintsInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutHintsInput
    upsert?: UserInfoUpsertWithoutHintsInput
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutHintsInput, UserInfoUpdateWithoutHintsInput>, UserInfoUncheckedUpdateWithoutHintsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type HouseInfoCreateWithoutUsersInput = {
    house_name: string
    color: string
  }

  export type HouseInfoUncheckedCreateWithoutUsersInput = {
    house_id?: number
    house_name: string
    color: string
  }

  export type HouseInfoCreateOrConnectWithoutUsersInput = {
    where: HouseInfoWhereUniqueInput
    create: XOR<HouseInfoCreateWithoutUsersInput, HouseInfoUncheckedCreateWithoutUsersInput>
  }

  export type HintCreateWithoutUserInput = {
    hint: string
  }

  export type HintUncheckedCreateWithoutUserInput = {
    id?: number
    hint: string
  }

  export type HintCreateOrConnectWithoutUserInput = {
    where: HintWhereUniqueInput
    create: XOR<HintCreateWithoutUserInput, HintUncheckedCreateWithoutUserInput>
  }

  export type HintCreateManyUserInputEnvelope = {
    data: HintCreateManyUserInput | HintCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HouseInfoUpsertWithoutUsersInput = {
    update: XOR<HouseInfoUpdateWithoutUsersInput, HouseInfoUncheckedUpdateWithoutUsersInput>
    create: XOR<HouseInfoCreateWithoutUsersInput, HouseInfoUncheckedCreateWithoutUsersInput>
    where?: HouseInfoWhereInput
  }

  export type HouseInfoUpdateToOneWithWhereWithoutUsersInput = {
    where?: HouseInfoWhereInput
    data: XOR<HouseInfoUpdateWithoutUsersInput, HouseInfoUncheckedUpdateWithoutUsersInput>
  }

  export type HouseInfoUpdateWithoutUsersInput = {
    house_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type HouseInfoUncheckedUpdateWithoutUsersInput = {
    house_id?: IntFieldUpdateOperationsInput | number
    house_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type HintUpsertWithWhereUniqueWithoutUserInput = {
    where: HintWhereUniqueInput
    update: XOR<HintUpdateWithoutUserInput, HintUncheckedUpdateWithoutUserInput>
    create: XOR<HintCreateWithoutUserInput, HintUncheckedCreateWithoutUserInput>
  }

  export type HintUpdateWithWhereUniqueWithoutUserInput = {
    where: HintWhereUniqueInput
    data: XOR<HintUpdateWithoutUserInput, HintUncheckedUpdateWithoutUserInput>
  }

  export type HintUpdateManyWithWhereWithoutUserInput = {
    where: HintScalarWhereInput
    data: XOR<HintUpdateManyMutationInput, HintUncheckedUpdateManyWithoutUserInput>
  }

  export type HintScalarWhereInput = {
    AND?: HintScalarWhereInput | HintScalarWhereInput[]
    OR?: HintScalarWhereInput[]
    NOT?: HintScalarWhereInput | HintScalarWhereInput[]
    id?: IntFilter<"Hint"> | number
    hint?: StringFilter<"Hint"> | string
    user_id?: StringFilter<"Hint"> | string
  }

  export type UserInfoCreateWithoutHouseInput = {
    user_id: string
    student_id: string
    matched_user?: string | null
    hints?: HintCreateNestedManyWithoutUserInput
  }

  export type UserInfoUncheckedCreateWithoutHouseInput = {
    user_id: string
    student_id: string
    matched_user?: string | null
    hints?: HintUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserInfoCreateOrConnectWithoutHouseInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutHouseInput, UserInfoUncheckedCreateWithoutHouseInput>
  }

  export type UserInfoCreateManyHouseInputEnvelope = {
    data: UserInfoCreateManyHouseInput | UserInfoCreateManyHouseInput[]
    skipDuplicates?: boolean
  }

  export type UserInfoUpsertWithWhereUniqueWithoutHouseInput = {
    where: UserInfoWhereUniqueInput
    update: XOR<UserInfoUpdateWithoutHouseInput, UserInfoUncheckedUpdateWithoutHouseInput>
    create: XOR<UserInfoCreateWithoutHouseInput, UserInfoUncheckedCreateWithoutHouseInput>
  }

  export type UserInfoUpdateWithWhereUniqueWithoutHouseInput = {
    where: UserInfoWhereUniqueInput
    data: XOR<UserInfoUpdateWithoutHouseInput, UserInfoUncheckedUpdateWithoutHouseInput>
  }

  export type UserInfoUpdateManyWithWhereWithoutHouseInput = {
    where: UserInfoScalarWhereInput
    data: XOR<UserInfoUpdateManyMutationInput, UserInfoUncheckedUpdateManyWithoutHouseInput>
  }

  export type UserInfoScalarWhereInput = {
    AND?: UserInfoScalarWhereInput | UserInfoScalarWhereInput[]
    OR?: UserInfoScalarWhereInput[]
    NOT?: UserInfoScalarWhereInput | UserInfoScalarWhereInput[]
    user_id?: StringFilter<"UserInfo"> | string
    student_id?: StringFilter<"UserInfo"> | string
    house_id?: IntNullableFilter<"UserInfo"> | number | null
    matched_user?: StringNullableFilter<"UserInfo"> | string | null
  }

  export type UserInfoCreateWithoutHintsInput = {
    user_id: string
    student_id: string
    matched_user?: string | null
    house?: HouseInfoCreateNestedOneWithoutUsersInput
  }

  export type UserInfoUncheckedCreateWithoutHintsInput = {
    user_id: string
    student_id: string
    house_id?: number | null
    matched_user?: string | null
  }

  export type UserInfoCreateOrConnectWithoutHintsInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutHintsInput, UserInfoUncheckedCreateWithoutHintsInput>
  }

  export type UserInfoUpsertWithoutHintsInput = {
    update: XOR<UserInfoUpdateWithoutHintsInput, UserInfoUncheckedUpdateWithoutHintsInput>
    create: XOR<UserInfoCreateWithoutHintsInput, UserInfoUncheckedCreateWithoutHintsInput>
    where?: UserInfoWhereInput
  }

  export type UserInfoUpdateToOneWithWhereWithoutHintsInput = {
    where?: UserInfoWhereInput
    data: XOR<UserInfoUpdateWithoutHintsInput, UserInfoUncheckedUpdateWithoutHintsInput>
  }

  export type UserInfoUpdateWithoutHintsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    matched_user?: NullableStringFieldUpdateOperationsInput | string | null
    house?: HouseInfoUpdateOneWithoutUsersNestedInput
  }

  export type UserInfoUncheckedUpdateWithoutHintsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    house_id?: NullableIntFieldUpdateOperationsInput | number | null
    matched_user?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HintCreateManyUserInput = {
    id?: number
    hint: string
  }

  export type HintUpdateWithoutUserInput = {
    hint?: StringFieldUpdateOperationsInput | string
  }

  export type HintUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    hint?: StringFieldUpdateOperationsInput | string
  }

  export type HintUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    hint?: StringFieldUpdateOperationsInput | string
  }

  export type UserInfoCreateManyHouseInput = {
    user_id: string
    student_id: string
    matched_user?: string | null
  }

  export type UserInfoUpdateWithoutHouseInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    matched_user?: NullableStringFieldUpdateOperationsInput | string | null
    hints?: HintUpdateManyWithoutUserNestedInput
  }

  export type UserInfoUncheckedUpdateWithoutHouseInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    matched_user?: NullableStringFieldUpdateOperationsInput | string | null
    hints?: HintUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserInfoUncheckedUpdateManyWithoutHouseInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    matched_user?: NullableStringFieldUpdateOperationsInput | string | null
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