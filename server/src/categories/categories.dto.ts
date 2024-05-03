export class CreateCategoryDto {
  name: string;
  status: boolean;
  movies?: string;
  updated_at: Date;
}

export class UpdateCategoryDto {
  name: string;
  status: boolean;
  movies?: string;
  updated_at: Date;
}
