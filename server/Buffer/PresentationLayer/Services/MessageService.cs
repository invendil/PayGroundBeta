using BuissnesLayer;
using DataLayer.Entityes;
using PresentationLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PresentationLayer.Services
{
    public class MessageService
    {
        private DataManager dataManager;
        public MessageService(DataManager dataManager)
        {
            this.dataManager = dataManager;
        }
        public List<Message> GetMessagesList()
        {
            var _dirs = dataManager.Message.GetAllMessages();

            return _dirs.ToList();
        }
        public Message getMessageById(int messageId)
        {
            Message _model = (Message)dataManager.Message.GetMessageById(messageId);
            return _model;
        }
        public void SaveMessageEditModelToDb(Message editModel)
        {
            dataManager.Message.SaveMessage(editModel);
        }
        

    
    }
}
