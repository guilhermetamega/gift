import { GraphQLClient } from "graphql-request";

const endpoint =
  "https://api-sa-east-1.graphcms.com/v2/ckzyt7j5967lv01xn3fpx5hz6/master";

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDU1ODEzOTgsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2Nrenl0N2o1OTY3bHYwMXhuM2ZweDVoejYvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNjYxNTUzN2MtN2M3Mi00ZjNlLThlNjUtNmRkODY4YzY3MTA0IiwianRpIjoiY2t6eXdvZG1xNmpseTAxejhmZnBkM3l0OSJ9.2f7fdf_v0DfPJ9Y2erwkPR1PJaV_vZ8JFNhe0oPCBeGKOwGJdrYqOiz3tRf6SngoJq3l7Y9LAWmWUD5mIm-Li413adtqPPVpXYWsy6BM26hVdz2BGDJQ8uFkzSxzGzXa0s4OhG3r64jpT2WEqqz0rDxJcRzpXsWAkhRCmZ5ZGRArlmXnrFeaS9D3mHLjXfulFEaHYwt7VlhLz0ejRuqvThTIirDkJ8xJD5qlcAru2QSFF9dOIdDtonaKtgYWjfxb7QpvOpktNrpfWxZ_N_KpZQfHqqUHLropETEyQcShx6gWG0g0CRph8KXTT63wOI2-IOGB9gjqLflluzi18qH5RNaYECs0Ou-3C4NGZbciAqVV54ehTzWIdY-XVK9SzHI8aGvRLkxZo4S2LBTCVPc3RlaHN5IfnrNc6A9MWaerU6RcZB58TW2avfoQ_8hD_4IWF3nNBap5hVbN9Y_t2i1jA33Ta9x0vI2QuUaohrL8U1SLQP8X6QG8aRwJkhpUU7DdxvXoezy6XuXeCpAw2qnYu0T4JMiZE2qrdJkB09A-0OvcyjWssKED0lEKY1BhE5CPkTRuNNu3T44gZ4LLBZpwxnzMnaqGy1r8ZgHsuy0ZwByElVrV5PKJLD-j7SZJWRluuUYSo4CdFn-GDJNhP4SPR5fSQRu_p1XK3EmGQv7YGyw";

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${token}`,
  },
});

export default client;
