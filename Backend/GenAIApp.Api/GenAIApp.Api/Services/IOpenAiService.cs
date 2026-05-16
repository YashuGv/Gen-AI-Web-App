namespace GenAIApp.Api.Services
{
    public interface IOpenAiService
    {
        Task<string> GenerateFormattedContentAsync(string input, string outputType);

    }
}
