import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkSchema } from './bookmark.schema';
import { CreateBookMarkDto } from './dto/create-bookmark.dto';
import { UpdateBookMarkDto } from './dto/update-bookmark.dto';

@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Get()
  async getAllBooks(): Promise<BookmarkSchema[]> {
    return this.bookmarkService.findAll();
  }

  @Post('/create')
  async createBookmark(
    @Body()
    bookmark: CreateBookMarkDto,
  ): Promise<BookmarkSchema> {
    return this.bookmarkService.createBookmark(bookmark);
  }

  @Get(':id')
  async getBookmarkById(
    @Param('id')
    id: string,
  ): Promise<BookmarkSchema> {
    return this.bookmarkService.getBookmarkById(id);
  }

  @Put(':id')
  async updateBookmark(
    @Param('id')
    id: string,
    @Body()
    bookmark: UpdateBookMarkDto,
  ): Promise<BookmarkSchema> {
    return this.bookmarkService.updateBookmarkById(id, bookmark);
  }
}
