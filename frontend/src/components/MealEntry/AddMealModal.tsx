// src/components/MealEntry/AddMealModal.tsx
import React, { useState } from "react";

export interface MealFormData {
  foodName: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  mealDate: string;
  mealTime: string;
  mealType: string;
  notes?: string;
}

interface AddMealModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (mealData: MealFormData) => Promise<void>;
  loading?: boolean;
}

const MEAL_TYPES = [
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'lunch', label: 'Lunch' },
  { value: 'dinner', label: 'Dinner' },
  { value: 'snack', label: 'Snack' },
  { value: 'meal', label: 'Other' }
];

const AddMealModal: React.FC<AddMealModalProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  loading = false 
}) => {
  const [formData, setFormData] = useState<MealFormData>({
    foodName: '',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    mealDate: new Date().toISOString().split('T')[0], // Today's date
    mealTime: new Date().toTimeString().slice(0, 5), // Current time
    mealType: 'meal',
    notes: ''
  });

  const [errors, setErrors] = useState<Partial<MealFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<MealFormData> = {};
    
    if (!formData.foodName.trim()) {
      newErrors.foodName = 'Food name is required';
    }
    
    if (formData.calories <= 0) {
      newErrors.calories = 'Calories must be greater than 0';
    }
    
    if (!formData.mealDate) {
      newErrors.mealDate = 'Date is required';
    }
    
    if (!formData.mealTime) {
      newErrors.mealTime = 'Time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await onSubmit(formData);
      // Reset form on successful submission
      setFormData({
        foodName: '',
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        mealDate: new Date().toISOString().split('T')[0],
        mealTime: new Date().toTimeString().slice(0, 5),
        mealType: 'meal',
        notes: ''
      });
      setErrors({});
      onClose();
    } catch (error) {
      console.error('Failed to add meal:', error);
      // Handle error (could set a general error state)
    }
  };

  const handleInputChange = (field: keyof MealFormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add New Meal</h2>
          <button 
            onClick={onClose}
            className="close-button"
            disabled={loading}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="meal-form">
          {/* Date and Time Row */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mealDate">Date*</label>
              <input
                type="date"
                id="mealDate"
                value={formData.mealDate}
                onChange={(e) => handleInputChange('mealDate', e.target.value)}
                disabled={loading}
                className={errors.mealDate ? 'error' : ''}
              />
              {errors.mealDate && <span className="error-text">{errors.mealDate}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="mealTime">Time*</label>
              <input
                type="time"
                id="mealTime"
                value={formData.mealTime}
                onChange={(e) => handleInputChange('mealTime', e.target.value)}
                disabled={loading}
                className={errors.mealTime ? 'error' : ''}
              />
              {errors.mealTime && <span className="error-text">{errors.mealTime}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="mealType">Meal Type</label>
              <select
                id="mealType"
                value={formData.mealType}
                onChange={(e) => handleInputChange('mealType', e.target.value)}
                disabled={loading}
              >
                {MEAL_TYPES.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Food Name */}
          <div className="form-group">
            <label htmlFor="foodName">Food Name*</label>
            <input
              type="text"
              id="foodName"
              value={formData.foodName}
              onChange={(e) => handleInputChange('foodName', e.target.value)}
              placeholder="e.g., Grilled Chicken Breast, Oatmeal with Berries"
              disabled={loading}
              className={errors.foodName ? 'error' : ''}
            />
            {errors.foodName && <span className="error-text">{errors.foodName}</span>}
          </div>

          {/* Nutrition Row */}
          <div className="form-row nutrition-row">
            <div className="form-group">
              <label htmlFor="calories">Calories*</label>
              <input
                type="number"
                id="calories"
                min="0"
                step="1"
                value={formData.calories || ''}
                onChange={(e) => handleInputChange('calories', parseFloat(e.target.value) || 0)}
                disabled={loading}
                className={errors.calories ? 'error' : ''}
              />
              {errors.calories && <span className="error-text">{errors.calories}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="protein">Protein (g)</label>
              <input
                type="number"
                id="protein"
                min="0"
                step="0.1"
                value={formData.protein || ''}
                onChange={(e) => handleInputChange('protein', parseFloat(e.target.value) || 0)}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="carbs">Carbs (g)</label>
              <input
                type="number"
                id="carbs"
                min="0"
                step="0.1"
                value={formData.carbs || ''}
                onChange={(e) => handleInputChange('carbs', parseFloat(e.target.value) || 0)}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="fat">Fat (g)</label>
              <input
                type="number"
                id="fat"
                min="0"
                step="0.1"
                value={formData.fat || ''}
                onChange={(e) => handleInputChange('fat', parseFloat(e.target.value) || 0)}
                disabled={loading}
              />
            </div>
          </div>

          {/* Notes */}
          <div className="form-group">
            <label htmlFor="notes">Notes (Optional)</label>
            <textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder="e.g., Ingredients, cooking method, portion size"
              rows={3}
              disabled={loading}
            />
          </div>

          {/* Action Buttons */}
          <div className="form-actions">
            <button 
              type="button" 
              onClick={onClose}
              className="cancel-button"
              disabled={loading}
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading ? 'Adding...' : 'Add Meal'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMealModal;