using BuissnesLayer;
using PresentationLayer.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace PresentationLayer
{
    public class ServicesManager
    {
        DataManager _dataManager;
        private DirectoryService _directoryService;
        private MaterialService _materialService;
        private MessageService _messageService;

        public ServicesManager(
            DataManager dataManager
            )
        {
            _dataManager = dataManager;
            _directoryService = new DirectoryService(_dataManager);
            _materialService = new MaterialService(_dataManager);
            _messageService = new MessageService(_dataManager);
        }
        public DirectoryService Directorys { get { return _directoryService; } }
        public MaterialService Materials { get { return _materialService; } }
        public MessageService Messages { get { return _messageService; } }
    }
}
