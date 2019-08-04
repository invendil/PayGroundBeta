using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BuissnesLayer.ModelView;
using Microsoft.AspNetCore.SignalR;

namespace WebApi.Hubs
{
    public class CommentsHub : Hub
    {
        public void SendToAll(string test)
        {
            Console.WriteLine("test hub: ", test);
        }
    }
}
