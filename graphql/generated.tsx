import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type ScheduleDate = {
  __typename?: 'ScheduleDate';
  id: Scalars['Int'];
  date: Scalars['String'];
  percent: Scalars['Int'];
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['Int'];
  url: Scalars['String'];
  movieId: Scalars['Int'];
};

export type Movie = {
  __typename?: 'Movie';
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  type: Scalars['String'];
  director: Scalars['String'];
  producer: Scalars['String'];
  country: Scalars['String'];
  duration: Scalars['Int'];
  thumbnail: Scalars['String'];
  isShow: Scalars['Boolean'];
  images?: Maybe<Array<Image>>;
};

export type ScheduleTime = {
  __typename?: 'ScheduleTime';
  id: Scalars['Int'];
  time: Scalars['String'];
  price: Scalars['Int'];
  theaterId: Scalars['Int'];
  theater?: Maybe<Theater>;
  scheduleDateId: Scalars['Int'];
  movieId: Scalars['Int'];
};

export type Customer = {
  __typename?: 'Customer';
  id: Scalars['Int'];
  csv: Scalars['Int'];
  creditCardNumber: Scalars['Int'];
  username: Scalars['String'];
  fullname: Scalars['String'];
};

export type Ticket = {
  __typename?: 'Ticket';
  id: Scalars['Int'];
  price: Scalars['Int'];
  seatId: Scalars['Int'];
  scheduleTimeId: Scalars['Int'];
  customerId: Scalars['Int'];
};

export type Seat = {
  __typename?: 'Seat';
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  percent: Scalars['Int'];
  theaterId: Scalars['Float'];
};

export type Theater = {
  __typename?: 'Theater';
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  cinemaId: Scalars['Float'];
};

export type Cinema = {
  __typename?: 'Cinema';
  id: Scalars['Int'];
  name: Scalars['String'];
  address: Scalars['String'];
};

export type Test = {
  __typename?: 'Test';
  id: Scalars['Int'];
  title: Scalars['String'];
  createAt: Scalars['DateTime'];
  updateAt: Scalars['DateTime'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  fullname: Scalars['String'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UserRespone = {
  __typename?: 'UserRespone';
  user?: Maybe<User>;
  errors?: Maybe<ErrorType>;
};

export type CustomerRespone = {
  __typename?: 'CustomerRespone';
  customer?: Maybe<Customer>;
  errors?: Maybe<ErrorType>;
};

export type ResponeMoviesHome = {
  __typename?: 'ResponeMoviesHome';
  moviesShowing: Array<Movie>;
  moviesComming: Array<Movie>;
};

export type ResponeMovie = {
  __typename?: 'ResponeMovie';
  movie?: Maybe<Movie>;
  error?: Maybe<ErrorType>;
};

export type SeatRespone = {
  __typename?: 'SeatRespone';
  seat?: Maybe<Seat>;
  isAvailable?: Maybe<Scalars['Boolean']>;
};

export type SignUpInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  fullname: Scalars['String'];
};

export type SignInInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type SignInCustomerInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  fullname: Scalars['String'];
  creditCardNumber: Scalars['Int'];
  csv: Scalars['Int'];
};

export type InputGetTime = {
  movieId?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type InputGetSeat = {
  scheduleTimeId?: Maybe<Scalars['Int']>;
  theaterId?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
};

export type BuyTicketInput = {
  scheduleTimeId: Scalars['Int'];
  seatId: Scalars['Int'];
  price: Scalars['Int'];
  location: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<UserRespone>;
  meCustomer?: Maybe<CustomerRespone>;
  moviesForHome: ResponeMoviesHome;
  cinemas: Array<Cinema>;
  moviesShowing: Array<Movie>;
  moviesComming: Array<Movie>;
  movie: ResponeMovie;
  getTimesSession: Array<ScheduleTime>;
  seats: Array<SeatRespone>;
};


export type QueryMovieArgs = {
  id: Scalars['Int'];
};


export type QueryGetTimesSessionArgs = {
  options: InputGetTime;
};


export type QuerySeatsArgs = {
  options: InputGetSeat;
};

export type Mutation = {
  __typename?: 'Mutation';
  userSignUp?: Maybe<UserRespone>;
  userSignIn?: Maybe<UserRespone>;
  customerSignUp?: Maybe<CustomerRespone>;
  customerSignIn?: Maybe<CustomerRespone>;
  logout: Scalars['Boolean'];
  buyTicket: Scalars['Boolean'];
};


export type MutationUserSignUpArgs = {
  data: SignUpInput;
};


export type MutationUserSignInArgs = {
  data: SignInInput;
};


export type MutationCustomerSignUpArgs = {
  data: SignInCustomerInput;
};


export type MutationCustomerSignInArgs = {
  data: SignInInput;
};


export type MutationBuyTicketArgs = {
  options: BuyTicketInput;
};

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type SignInMutationVariables = Exact<{
  data: SignInInput;
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { userSignIn?: Maybe<(
    { __typename?: 'UserRespone' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'fullname'>
    )>, errors?: Maybe<(
      { __typename?: 'ErrorType' }
      & Pick<ErrorType, 'field' | 'message'>
    )> }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UserRespone' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'fullname'>
    )>, errors?: Maybe<(
      { __typename?: 'ErrorType' }
      & Pick<ErrorType, 'field' | 'message'>
    )> }
  )> }
);


export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($data: SignInInput!) {
  userSignIn(data: $data) {
    user {
      id
      username
      fullname
    }
    errors {
      field
      message
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    user {
      id
      username
      fullname
    }
    errors {
      field
      message
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;