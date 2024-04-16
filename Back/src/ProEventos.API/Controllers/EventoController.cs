using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProEventos.API.Models;
using ProEventos.API.Data;


namespace ProEventos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventoController : ControllerBase
{
    private readonly DataContext _context;
    public EventoController(DataContext context)
    {
        _context = context;
    }


    [HttpGet]
    public IEnumerable<Evento> Get()
    {
        return _context.Eventos;
    }

    [HttpGet("{id}")]
    public IEnumerable<Evento> GetById(int id)
    {
        return _context.Eventos.Where(evento => evento.EventoId == id);
    }


    [HttpPost]
    public string Post()
    {
        return "exemplo";
    }


}
