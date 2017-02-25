import { Query, Resolver, ResolveProperty } from '@nestjs/graphql';

import { AuthorsService } from '../../authors/authors.service';
import { PostsService } from '../../posts/posts.service';

@Resolver('Author')
export class AuthorResolver {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly postsService: PostsService,
  ) {}

  @Query('author')
  async getAuthor(obj, { id }) {
    return await this.authorsService.findOneById(id);
  }

  @ResolveProperty('posts')
  async getPosts(author) {
    const { id } = author;
    return await this.postsService.findAllByAuthor(id);
  }
}
