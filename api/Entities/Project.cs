using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Entities
{
    public class Project
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string VideoUrl { get; set; }
        public string Title { get; set; }
        public string ShortDescription { get; set; }
        public string LongDescription { get; set; }
        public string DevelopmentDescription { get; set; }
        public string ExternalUrl { get; set; }
        public List<ProjectContribution> Contributions { get; set; } = new();
        public string Skills {get; set;}
    }
}