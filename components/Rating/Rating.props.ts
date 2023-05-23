export interface RatingProps {
    isEditable? : boolean;
    rating : number;
    setRating? : (r : number) => void;
}