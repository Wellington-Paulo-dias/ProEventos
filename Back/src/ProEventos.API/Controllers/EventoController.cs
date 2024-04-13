using Microsoft.AspNetCore.Mvc;
using ProEventos.API.Models; 
using System;
namespace ProEventos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventoController : ControllerBase
{
    public EventoController()
    {
       
    }


    [HttpGet(Name = "GetEvento")]
    public Evento Get()
    {
       return new Evento()
       {
        EventoId = 1 ,
        Tema = "Angular",
        Local="Bh",
        Lote="1º Lote",
        QtdePessoas = 250,
        DataEvento = DateTime.Now.ToString()
       };
    }
}
