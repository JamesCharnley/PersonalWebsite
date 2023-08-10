using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs
{
    public class ProjectContributionDto
    {
        public int Id { get; set; }
        public string Contribution { get; set; }
        public int ProjectId { get; set; }
    }
}