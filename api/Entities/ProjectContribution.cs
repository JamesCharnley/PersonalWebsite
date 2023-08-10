using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Entities
{
    [Table("Contributions")]
    public class ProjectContribution
    {
        public int Id { get; set; }
        public string Contribution { get; set; }
        public int ProjectId { get; set; }
        public Project Project { get; set; }
    }
}