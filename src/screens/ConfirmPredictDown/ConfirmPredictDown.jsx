import React, { useState } from "react";
import { CircleRightDown1 } from "../../icons/CircleRightDown1";
import { CloseOne1 } from "../../icons/CloseOne1";
import "./style.css";
import { useSnapshot } from "valtio";
import { mainManager } from "../../models/main";

export const ConfirmPredictDown = () => {
  const { amount } = useSnapshot(mainManager);
  const [showToast, setShowToast] = useState(false);

  const handleConfirmClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const onClose = () => {
    window.location.href = "/"; // Navigate to the main page
  };

  return (
    <div className="confirm-predict">
      <div className="div-6">
        <div className="frame-47">
          <div className="text-wrapper-16">Confirm Predict</div>
          <CloseOne1 className="close-one-9" onClick={onClose} />
        </div>
        <div className="frame-48">
          <CircleRightDown1 className="icon-instance-node-4" />
          <div className="text-wrapper-19">DOWN!</div>
          <div className="frame-49">
            <div className="element-x-payout">0.00X&nbsp;&nbsp;Payout</div>
            <p className="bid-coin">
              <span className="text-wrapper-17">Bid </span>
              <span className="text-wrapper-18">{amount} Coin</span>
            </p>
          </div>
        </div>
        <div className="frame-49">
          <div className="frame-50" onClick={handleConfirmClick}>
            <div className="saved-messages-3">Confirm</div>
          </div>
        </div>
      </div>
      {showToast && (
        <div className="toast">
          <div className="toast-message">Predict Confirmed!</div>
        </div>
      )}
    </div>
  );
};
