using api.Data;
using api.DTOs;
using api.Entities;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    public class ProjectsController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public ProjectsController(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Project>>> GetProjectThumbnails()
        //{
            //var projects = await _context.Projects.ToListAsync();

            //return Ok(projects);
        //}
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
        {
            var projects = await _context.Projects.ProjectTo<ProjectThumbnailDto>(_mapper.ConfigurationProvider).ToListAsync();

            return Ok(projects);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> GetProject(int id)
        {
            var project = await _context.Projects.Where(x => x.Id == id).ProjectTo<ProjectDto>(_mapper.ConfigurationProvider).SingleOrDefaultAsync();

            return Ok(project);
        }
    }
}