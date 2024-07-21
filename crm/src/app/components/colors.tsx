import React from 'react';

export interface ColorsProps {
  textInput: string;
  color: string;
}

export default function Colors({ color, textInput }: ColorsProps) {
  const handleAddFurniture = event => {
    event.preventDefault();
    return (
      <div>
        <p>{event.name.value}</p>
        
      </div>
    );
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="enter the furniture"
        className="mt-10"
      />
      <button type="submit">add furniture</button>
    </form>
  );
}
