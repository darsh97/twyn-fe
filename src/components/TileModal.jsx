import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { X } from 'lucide-react';

const TileModal = ({ isOpen, onClose, tile }) => {
  if (!tile) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="modal-content">
        <DialogHeader>
          <DialogTitle className="modal-title">{tile.title}</DialogTitle>
          <button onClick={onClose} className="modal-close">
            <X size={24} />
          </button>
        </DialogHeader>
        <DialogDescription className="modal-description">
          {tile.description}
        </DialogDescription>
        <div className="modal-details">
          <h4 className="modal-details-title">Key Features:</h4>
          <ul className="modal-details-list">
            {tile.details.map((detail, index) => (
              <li key={index} className="modal-detail-item">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TileModal;