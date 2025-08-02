import 'server-only';
import {
  data,
  type Demo,
  type DemoCategory,
  type DemoSlug,
  type Courses,
  type Section,
} from '../app/_internal/_data';

type ProductWhere = { id?: string; section?: string };

type ProductFindOptions = { where?: ProductWhere; limit?: number };

type SectionWhere = { id?: string; slug?: string };

type SectionFindOptions = { where?: SectionWhere; limit?: number };

type DemoWhere = { slug?: DemoSlug };

type DemoFindOptions = { where?: DemoWhere };

const db = {
  product: {
    find: (options: ProductFindOptions) => {
      let product: Courses | undefined;

      if (options.where?.id !== undefined) {
        product = data.products.find((p) => p.id === options.where?.id);
      }

      let prev: string | undefined = undefined;
      let next: string | undefined = undefined;

      if (product) {
        const ids = data.products.map((p) => Number(p.id));
        const currentIndex = ids.indexOf(Number(product.id));
        const prevIndex = (currentIndex - 1 + ids.length) % ids.length;
        const nextIndex = (currentIndex + 1) % ids.length;

        prev = data.products[prevIndex]?.id;
        next = data.products[nextIndex]?.id;
      }

      return product ? { ...product, prev, next } : null;
    },

    findMany: (options: ProductFindOptions = {}) => {
      let result = data.products;

      if (options.where?.section) {
        result = result.filter(
          (product) => product.section === options.where!.section
        );
      }

      if (options.limit !== undefined) {
        result = result.slice(0, options.limit);
      }

      return result;
    },
  },

  section: {
    find: (options: SectionFindOptions) => {
      let section: Section | undefined;

      if (options.where?.id !== undefined) {
        section = data.sections.find((s) => s.id === options.where?.id);
      } else if (options.where?.slug !== undefined) {
        section = data.sections.find((s) => s.slug === options.where?.slug);
      }

      return section || null;
    },

    findMany: (options: SectionFindOptions = {}) => {
      let result = data.sections;

      if (options.where?.id) {
        result = result.filter((section) => section.id === options.where!.id);
      }

      if (options.where?.slug) {
        result = result.filter(
          (section) => section.slug === options.where!.slug
        );
      }

      if (options.limit !== undefined) {
        result = result.slice(0, options.limit);
      }

      return result;
    },
  },

  demo: {
    find: (options: DemoFindOptions) => {
      let demo: Demo | undefined;

      if (options.where?.slug !== undefined) {
        for (const category of data.demos) {
          const found = category.items.find(
            (d) => d.slug === options.where?.slug
          );
          if (found) {
            demo = found;
            break;
          }
        }
      }

      if (typeof demo === 'undefined') {
        throw new Error(`Demo not found: ${options.where?.slug}`);
      }

      return demo;
    },

    findMany: () => {
      return data.demos;
    },
  },
};

export default db;

export type { Demo, Courses as Product, Section, DemoCategory };
