import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StoriesPage = () => {
  // Mock data
  const initialStories = [
    {
      id: 1,
      title: "My Coming Out Journey",
      content: "I came out to my family last year and it was the most challenging but liberating experience of my life. Growing up in a conservative household, I never imagined I'd have the courage to be my authentic self. The journey was difficult - there were tears, misunderstandings, and moments of doubt. But through it all, I discovered an incredible strength within myself and found support in unexpected places. Today, I'm proud to live openly and hope my story can inspire others who may be struggling with their identity.",
      author: "Alex M.",
      date: "2025-05-15",
      category: "Coming Out",
      comments: [
        { id: 1, author: "Jamie K.", text: "Thank you for sharing this! Your bravery gives me hope for my own journey.", date: "2025-05-16" },
        { id: 2, author: "Taylor R.", text: "This resonates so deeply. The part about finding strength really moved me.", date: "2025-05-17" }
      ]
    },
    {
      id: 2,
      title: "Finding Community in Nairobi",
      content: "When I moved to Nairobi for university, I was terrified I wouldn't find people who understood me. Back home, I had no queer friends or role models. During my first month, I stumbled upon a poster for Queer Kenya's monthly meetup. Walking into that room changed my life. For the first time, I didn't feel alone. The connections I've made through this community have become my chosen family. We celebrate each other's victories, support through challenges, and most importantly - we show up for one another.",
      author: "Sam P.",
      date: "2025-04-28",
      category: "Community",
      comments: [
        { id: 1, author: "Morgan W.", text: "Nairobi's queer community saved me too! Let's connect at the next event.", date: "2025-04-30" }
      ]
    },
    {
      id: 3,
      title: "Navigating Workplace Discrimination",
      content: "After being promoted to team lead, I faced subtle but persistent discrimination from colleagues who discovered I was queer. Backhanded comments, exclusion from important meetings, and unfair workload distribution became daily challenges. With support from Queer Kenya's legal team, I documented everything and filed a formal complaint. The process was grueling, but we reached a settlement that included mandatory DEI training for all staff. My advice? Know your rights, document everything, and don't be afraid to speak up.",
      author: "Riley T.",
      date: "2025-06-02",
      category: "Workplace",
      comments: []
    }
  ];

  const [stories, setStories] = useState(initialStories);
  const [newStory, setNewStory] = useState({ title: '', content: '', category: '' });
  const [newComment, setNewComment] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedStory, setExpandedStory] = useState(null);

  const categories = ['All', 'Coming Out', 'Community', 'Workplace', 'Family', 'Health'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStory(prev => ({ ...prev, [name]: value }));
  };

  const handleCommentChange = (storyId, e) => {
    const { value } = e.target;
    setNewComment(prev => ({ ...prev, [storyId]: value }));
  };

  const handleSubmitStory = (e) => {
    e.preventDefault();
    const story = {
      id: stories.length + 1,
      title: newStory.title,
      content: newStory.content,
      author: "You",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: newStory.category || 'General',
      comments: []
    };
    setStories([story, ...stories]);
    setNewStory({ title: '', content: '', category: '' });
  };

  const handleSubmitComment = (storyId, e) => {
    e.preventDefault();
    const commentText = newComment[storyId];
    if (!commentText) return;

    const updatedStories = stories.map(story => {
      if (story.id === storyId) {
        return {
          ...story,
          comments: [
            ...story.comments,
            {
              id: story.comments.length + 1,
              author: "You",
              text: commentText,
              date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
            }
          ]
        };
      }
      return story;
    });

    setStories(updatedStories);
    setNewComment(prev => ({ ...prev, [storyId]: '' }));
  };

  const filteredStories = selectedCategory === 'All' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '250px 1fr',
      gap: '30px',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '60px 20px',
      fontFamily: "'Inter', sans-serif",
      minHeight: '100vh'
    }}>
      {/* Left Sidebar */}
      <div style={{
        position: 'sticky',
        top: '20px',
        height: 'fit-content',
        marginBottom: '30px'
      }}>
        <div style={{
          backgroundColor: '#f9f5ff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{
            color: 'black',
            marginTop: '0',
            fontSize: '1.2rem',
            borderBottom: '1px solid #e9d5ff',
            paddingBottom: '10px'
          }}>Categories</h3>
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '0'
          }}>
            {categories.map(category => (
              <li key={category} style={{ marginBottom: '8px' }}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    background: selectedCategory === category ? '#4B0082' : 'transparent',
                    color: selectedCategory === category ? 'white' : '#4B0082',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '8px 12px',
                    width: '100%',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontWeight: selectedCategory === category ? '600' : '500',
                    ':hover': {
                      background: selectedCategory !== category ? '#f3e8ff' : undefined
                    }
                  }}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div style={{
          backgroundColor: '#f9f5ff',
          borderRadius: '12px',
          padding: '20px',
          marginTop: '60px',
          marginBottom: '30px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{
            color: 'black',
            marginTop: '0',
            fontSize: '1.2rem',
            borderBottom: '1px solid #e9d5ff',
            paddingBottom: '10px'
          }}>Share Your Story</h3>
          <form onSubmit={handleSubmitStory}>
            <div style={{ marginBottom: '15px' }}>
              <input
                type="text"
                name="title"
                value={newStory.title}
                onChange={handleInputChange}
                placeholder="Story title"
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  color: '#333',
                  borderRadius: '6px',
                  border: '1px solid #ddd',
                  fontSize: '14px'
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <select
                name="category"
                value={newStory.category}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #ddd',
                  fontSize: '14px',
                  backgroundColor: 'white'
                }}
              >
                <option value="">Select a category</option>
                {categories.filter(c => c !== 'All').map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <textarea
                name="content"
                value={newStory.content}
                onChange={handleInputChange}
                placeholder="Tell your story..."
                required
                rows="4"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #ddd',
                  fontSize: '14px',
                  resize: 'vertical'
                }}
              ></textarea>
            </div>
            <button type="submit" style={{
              backgroundColor: '#4B0082',
              color: 'white',
              padding: '10px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              width: '100%',
              fontWeight: '600',
              transition: 'background-color 0.2s',
              ':hover': {
                backgroundColor: '#3a0069'
              }
            }}>
              Publish Story
            </button>
          </form>
        </div>
      </div>

      {/* Right Content Area */}
      <div>
        <h1 style={{
          color: 'black',
          fontSize: '2rem',
          marginTop: '0',
          marginBottom: '25px'
        }}>
          {selectedCategory === 'All' ? 'All Stories' : `${selectedCategory} Stories`}
        </h1>

        {filteredStories.length === 0 ? (
          <div style={{
            backgroundColor: '#f9f5ff',
            padding: '40px',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>
              No stories found in this category. Be the first to share your story!
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gap: '25px'
          }}>
            {filteredStories.map(story => (
              <article key={story.id} style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                border: '1px solid #f3e8ff'
              }}>
                <div style={{
                  padding: '25px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '15px'
                  }}>
                    <span style={{
                      backgroundColor: '#e9d5ff',
                      color: '#4B0082',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {story.category}
                    </span>
                    <span style={{
                      color: '#888',
                      fontSize: '0.9rem',
                      marginLeft: 'auto'
                    }}>
                      {story.date}
                    </span>
                  </div>

                  <h2 style={{
                    color: '#4B0082',
                    fontSize: '1.5rem',
                    marginTop: '0',
                    marginBottom: '10px'
                  }}>
                    {story.title}
                  </h2>

                  <p style={{
                    color: '#555',
                    lineHeight: '1.7',
                    marginBottom: '15px'
                  }}>
                    {expandedStory === story.id 
                      ? story.content 
                      : `${story.content.substring(0, 200)}...`}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      color: '#4B0082',
                      fontWeight: '600'
                    }}>
                      {story.author}
                    </span>

                    <button 
                      onClick={() => setExpandedStory(expandedStory === story.id ? null : story.id)}
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#4B0082',
                        cursor: 'pointer',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '5px 10px',
                        borderRadius: '6px',
                        ':hover': {
                          backgroundColor: '#f9f5ff'
                        }
                      }}
                    >
                      {expandedStory === story.id ? 'Show less' : 'Read more'}
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ marginLeft: '5px' }}
                      >
                        <path 
                          d={expandedStory === story.id ? "M19 9L12 16L5 9" : "M5 15L12 8L19 15"} 
                          stroke="#4B0082" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Expanded content with comments */}
                {expandedStory === story.id && (
                  <div style={{
                    backgroundColor: '#f9fafb',
                    padding: '25px',
                    borderTop: '1px solid #eee'
                  }}>
                    <h3 style={{
                      color: '#4B0082',
                      fontSize: '1.1rem',
                      marginTop: '0',
                      marginBottom: '20px'
                    }}>
                      {story.comments.length} {story.comments.length === 1 ? 'Comment' : 'Comments'}
                    </h3>

                    {story.comments.length > 0 ? (
                      <div style={{
                        marginBottom: '25px'
                      }}>
                        {story.comments.map(comment => (
                          <div key={comment.id} style={{
                            marginBottom: '20px',
                            paddingBottom: '20px',
                            borderBottom: '1px solid #eee'
                          }}>
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginBottom: '8px'
                            }}>
                              <span style={{
                                fontWeight: '600',
                                color: '#4B0082'
                              }}>
                                {comment.author}
                              </span>
                              <span style={{
                                color: '#888',
                                fontSize: '0.8rem',
                                marginLeft: '10px'
                              }}>
                                {comment.date}
                              </span>
                            </div>
                            <p style={{
                              color: '#333',
                              margin: '0',
                              lineHeight: '1.6'
                            }}>
                              {comment.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p style={{
                        color: '#888',
                        fontStyle: 'italic',
                        marginBottom: '25px'
                      }}>
                        No comments yet. Be the first to share your thoughts!
                      </p>
                    )}

                    <form onSubmit={(e) => handleSubmitComment(story.id, e)}>
                      <textarea
                        value={newComment[story.id] || ''}
                        onChange={(e) => handleCommentChange(story.id, e)}
                        placeholder="Write your comment..."
                        required
                        rows="3"
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid #ddd',
                          marginBottom: '15px',
                          resize: 'vertical',
                          fontSize: '14px'
                        }}
                      ></textarea>
                      <button type="submit" style={{
                        backgroundColor: '#4B0082',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        transition: 'background-color 0.2s',
                        ':hover': {
                          backgroundColor: '#3a0069'
                        }
                      }}>
                        Post Comment
                      </button>
                    </form>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StoriesPage;