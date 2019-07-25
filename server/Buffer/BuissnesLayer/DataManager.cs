using BuissnesLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer
{
    public class DataManager
    {
        private IDirectorysRepository _directorysRepository;
        private IMaterialsRepository _materialsRepository;
        private IMessageRepository _messageRepository;

        public DataManager(IDirectorysRepository directorysRepository, IMaterialsRepository materialsRepository, IMessageRepository messageRepository)
        {
            _directorysRepository = directorysRepository;
            _materialsRepository = materialsRepository;
            _messageRepository = messageRepository;
        }

        public IDirectorysRepository Directorys { get { return _directorysRepository; } }
        public IMaterialsRepository Materials { get { return _materialsRepository; } }
        public IMessageRepository Message { get { return _messageRepository; } }
    }
}
