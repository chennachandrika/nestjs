import { Controller, Get } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkSchema } from './bookmark.schema';

@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Get()
  async getAllBooks(): Promise<BookmarkSchema[]> {
    return this.bookmarkService.findAll();
  }
}
