import { Category } from '../bookmark.schema';

export class UpdateBookMarkDto {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly price: number;
  readonly category: Category;
}
