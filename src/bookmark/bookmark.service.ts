import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BookmarkSchema } from './bookmark.schema';
import mongoose from 'mongoose';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectModel(BookmarkSchema.name)
    private bookModel: mongoose.Model<BookmarkSchema>,
  ) {}

  async findAll(): Promise<BookmarkSchema[]> {
    const books = await this.bookModel.find();
    return books;
  }

  async createBookmark(bookmark: BookmarkSchema): Promise<BookmarkSchema> {
    const response = await this.bookModel.create(bookmark);
    return response;
  }

  async getBookmarkById(id: string): Promise<BookmarkSchema> {
    const bookmark = await this.bookModel.findById(id);
    if (!bookmark) throw new NotFoundException('Bookmark not found');
    return bookmark;
  }

  async updateBookmarkById(
    id: string,
    bookmark: BookmarkSchema,
  ): Promise<BookmarkSchema> {
    return await this.bookModel.findByIdAndUpdate(id, bookmark, {
      new: true,
      runValidators: true,
    });
  }
}
