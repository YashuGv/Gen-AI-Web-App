using System.Text.Json.Serialization;

namespace GenAIApp.Api.Models
{
    public class OpenAiResponse
    {
        [JsonPropertyName("text")]
        public string Text { get; set; }
    }
}
