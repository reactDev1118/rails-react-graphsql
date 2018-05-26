Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  connection :directory, Connections::DirectoryConnection do
    argument :searchTerm, types.String

    resolve Resolvers::GetProviders.new
  end
end
