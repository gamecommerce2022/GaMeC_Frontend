import { BriefcaseIcon, ChatBubbleOvalLeftEllipsisIcon, HomeIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { BreadCrumbComponent } from "../../component/breadcrumb";
import { TableComponent } from "../../component/table";
import * as ProductService from '../../../../services/product/product'
import { Comment } from "../../../../model/comment";
import { useParams } from "react-router-dom";
import { getCommentByProduct } from "../../../../services/product/product";
import { EmptyComment } from "./empty_comment";
import { CommentItemComponent } from "./comment_item";

export const CommentTableComponent = () => {
    const { productId } = useParams<{ productId: string }>();
    const [comments, setComments] = useState<Comment[]>([]);
    useEffect(() => {
        try {
          setTimeout(async () => {
            geComments()
          }, 0);
        } catch (error) {
          console.log(error);
        }
      }, []);
    
      function geComments() {
        ProductService.getCommentByProduct(productId!).then((response) => {
          setComments(response!);
        });
      }
    return (
        <div>
          <BreadCrumbComponent
            key="bread-crumb-component-key"
            list={[
                { name: 'Dashboard', icon: <HomeIcon className="w-4 h-4" />, path: '/admin' },
                {
                  name: 'Products',
                  icon: <BriefcaseIcon className="w-4 h-4" />,
                  path: '/admin/products',
                },
                { name: 'Comment', icon: <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4" /> },
              ]}
          />
          <div className="relative">
            {
                comments.length === 0 ? <EmptyComment/> : <TableComponent
                key="table-component-key"
                headerList={['ID', 'AUHTOR NAME', 'COMMENT', 'DATE']}
                bodyList={comments.map((comment, index) => {
                  return (
                    <CommentItemComponent
                      comment={comment}
                      index={index + 1}
                      key={`${index}-${comment.authorId}`}
                    />
                  );
                })}
              />
            }
            
               
          </div>
        </div>
      );
}