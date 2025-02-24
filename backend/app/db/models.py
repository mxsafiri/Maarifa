from sqlalchemy import Boolean, Column, Integer, String, ForeignKey, DateTime, Text, Float
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.base_class import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    full_name = Column(String)
    hashed_password = Column(String)
    role = Column(String)  # parent, teacher, student, organization
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    profiles = relationship("Profile", back_populates="user")
    progress = relationship("Progress", back_populates="user")
    created_content = relationship("Content", back_populates="creator")

class Profile(Base):
    __tablename__ = "profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    avatar_url = Column(String)
    bio = Column(Text)
    preferences = Column(Text)  # JSON string of learning preferences
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    user = relationship("User", back_populates="profiles")

class Content(Base):
    __tablename__ = "content"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    content_type = Column(String)  # video, article, quiz, exercise
    content_url = Column(String)
    creator_id = Column(Integer, ForeignKey("users.id"))
    language = Column(String)
    tags = Column(String)  # Comma-separated tags
    difficulty_level = Column(String)  # beginner, intermediate, advanced
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    creator = relationship("User", back_populates="created_content")
    progress = relationship("Progress", back_populates="content")

class Progress(Base):
    __tablename__ = "progress"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    content_id = Column(Integer, ForeignKey("content.id"))
    status = Column(String)  # not_started, in_progress, completed
    score = Column(Float)  # For quizzes and exercises
    last_position = Column(Integer)  # For videos and articles (timestamp/position)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    user = relationship("User", back_populates="progress")
    content = relationship("Content", back_populates="progress")
